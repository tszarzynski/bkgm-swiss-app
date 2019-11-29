import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISBPlayers } from "bkgm-swiss";

export type Player = {
  ID: number;
  name: string;
};

export type Players = Player[];

let initialState: Players = [];

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
          name
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
