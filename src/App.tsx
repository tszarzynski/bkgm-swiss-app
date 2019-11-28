import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PlayerList from "./featues/players/PlayerList";
import { RootState } from "./app/reducers";
import { addPlayer, removePlayer } from "./featues/players/playersSlice";
import Header from "./components/Header";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { players } = useSelector((state: RootState) => state);

  return (
    <div>
      <Header />
      <PlayerList
        players={players}
        removePlayer={(playerID: number) => {
          dispatch(removePlayer({ playerID }));
        }}
        addPlayer={(name: string) => {
          dispatch(addPlayer(name));
        }}
      />
    </div>
  );
};

export default App;
