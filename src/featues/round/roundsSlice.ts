import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISBPlayers, ISBPairings, pairPlayers, ISBPairing } from "bkgm-swiss";

let nextMatchId = 0;
let nextRoundId = 0;

export type Match = {
  ID: number;
  roundID: number;
  pairing: ISBPairing;
  result: [number, number];
};

const makeMatch = (roundID: number, pairing: ISBPairing): Match => ({
  roundID,
  ID: nextMatchId++,
  pairing,
  result: [0, 0]
});

export type Round = Match[];
export type Rounds = Match[];


const makeISBPlayers = (players:Players) :ISBPlayers => {
    players.map
}

let initialState: Rounds = [];

const roundsSlice = createSlice({
  name: "rounds",
  initialState,
  reducers: {
    addRound(state, { payload }: PayloadAction<{ players: Players }>) {
      const { players } = payload;

      const roundID = nextRoundId++;
      const pairings: ISBPairings = pairPlayers(players);
      const matches = pairings.map(pairing => makeMatch(roundID, pairing));

      state = state.concat(matches);
    }
  }
});

export const { addRound } = roundsSlice.actions;
export default roundsSlice.reducer;
