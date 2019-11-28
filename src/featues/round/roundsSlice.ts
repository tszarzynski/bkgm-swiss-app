import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISBPlayers, ISBPairings, pairPlayers } from "bkgm-swiss";

let initialState: ISBPairings[] = [];

const roundsSlice = createSlice({
  name: "rounds",
  initialState,
  reducers: {
    addRound(state, { payload }: PayloadAction<{ players: ISBPlayers }>) {
      const { players } = payload;

      state.push(pairPlayers(players));
    }
  }
});

export const { addRound } = roundsSlice.actions;
export default roundsSlice.reducer;
