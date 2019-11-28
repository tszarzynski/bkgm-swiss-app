import { combineReducers } from "redux";
import playersReducer from "../featues/players/playersSlice";

const rootReducer = combineReducers({
  players: playersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
