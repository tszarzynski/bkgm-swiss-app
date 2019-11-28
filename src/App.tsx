import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import PlayerListPage from "./featues/players/PlayerListPage";
import RoundListPage from "./featues/round/RoundListPage";

const App: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <PlayerListPage />
      <RoundListPage />
    </Container>
  );
};

export default App;
