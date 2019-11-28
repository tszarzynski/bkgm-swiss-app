import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISBPlayers } from "bkgm-swiss";

let initialState: ISBPlayers = [];

let nextPlayerId = 0;
const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: {
      reducer(state, { payload }: PayloadAction<{ name: string; ID: number }>) {
        const { ID, name } = payload;
        state.push({
          ID,
          name,
          gamesWon: 0,
          matchesWon: 0,
          matchesLost: 0,
          omv: 0,
          opponents: []
        });
      },
      prepare(name: string) {
        return { payload: { name, ID: nextPlayerId++ } };
      }
    },
    removePlayer(state, { payload }: PayloadAction<{ playerID: number }>) {
      const { playerID } = payload;

      return state.filter(player => player.ID !== playerID);
    }
  }
});

export const { addPlayer, removePlayer } = playersSlice.actions;
export default playersSlice.reducer;
