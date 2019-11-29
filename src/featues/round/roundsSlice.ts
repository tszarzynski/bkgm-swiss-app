import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ISBPairing,
  ISBPairings,
  ISBPlayers,
  pairPlayers,
  rankPlayers,
  calcOMV
} from "bkgm-swiss";
import { RootState } from "../../app/reducers";
import { Player } from "../players/playersSlice";

let nextMatchId = 0;

export type Match = {
  ID: number;
  roundID: number;
  pairing: ISBPairing;
  result: [number, number];
  hasBye: boolean;
};

const makeMatch = (roundID: number, pairing: ISBPairing): Match => {
  const hasBye = pairing.includes(-1);

  return {
    roundID,
    ID: nextMatchId++,
    pairing,
    result: [0, hasBye ? -1 : 0],
    hasBye
  };
};

export type Rounds = Match[];

const makeISBPlayers = (players: Player[], rounds: Rounds): ISBPlayers => {
  const playersWithStats = players.map(player => {
    const playerMatches = rounds.filter(match =>
      match.pairing.includes(player.ID)
    );

    type Stats = {
      gamesWon: number;
      matchesWon: number;
      matchesLost: number;
      opponents: number[];
    };

    const stats = playerMatches.reduce(
      (acc: Stats, match: Match) => {
        const idxPlayer = match.pairing.findIndex(p => player.ID === p)!;
        const idxOpponent = match.pairing.length - 1 - idxPlayer;

        return {
          gamesWon: acc.gamesWon + match.result[idxPlayer],
          matchesWon:
            acc.matchesWon +
            (match.result[idxPlayer] > match.result[idxOpponent] ? 1 : 0),
          matchesLost:
            acc.matchesLost +
            (match.result[idxPlayer] < match.result[idxOpponent] ? 1 : 0),
          opponents: [...acc.opponents, match.pairing[idxOpponent]]
        };
      },
      {
        gamesWon: 0,
        matchesWon: 0,
        matchesLost: 0,
        opponents: []
      }
    );
    //TODO: Calc OMV
    return {
      ...player,
      ...stats,
      omv: 0
    };
  });

  return playersWithStats.map(pl => ({
    ...pl,
    omv: calcOMV(playersWithStats, pl)
  }));
};

export type State = {
  rounds: Rounds;
  currentRound: number;
};
let initialState: State = {
  rounds: [],
  currentRound: 0
};

const roundsSlice = createSlice({
  name: "rounds",
  initialState,
  reducers: {
    addRound(state, { payload }: PayloadAction<{ players: Player[] }>) {
      const { players } = payload;

      const roundID = ++state.currentRound;
      const pairings: ISBPairings = pairPlayers(
        makeISBPlayers(players, state.rounds)
      );

      const matches = pairings.map(pairing => makeMatch(roundID, pairing));

      state.rounds = state.rounds.concat(matches);
    },
    updateMatch(state, { payload }: PayloadAction<{ matchToUpdate: Match }>) {
      const { matchToUpdate } = payload;

      state.rounds = state.rounds.map(match => {
        if (match.ID === matchToUpdate.ID) {
          return matchToUpdate;
        }
        return match;
      });
    },
    reset() {
      return initialState;
    }
  }
});

export const selectRankedPlayers = (state: RootState) =>
  rankPlayers(makeISBPlayers(state.players, state.rounds.rounds));

export const selectCurrentRound = (state: RootState): Rounds =>
  state.rounds.rounds.filter(
    match => match.roundID === state.rounds.currentRound && !match.hasBye
  );

export const selectCurrentRoundNumber = (state: RootState): number =>
  state.rounds.currentRound;

export const { addRound, updateMatch } = roundsSlice.actions;
export default roundsSlice.reducer;
