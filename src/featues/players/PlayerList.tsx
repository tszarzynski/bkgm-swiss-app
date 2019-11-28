import { List } from "@material-ui/core";
import { ISBPlayers } from "bkgm-swiss";
import React from "react";
import PlayerForm from "./PlayerForm";
import PlayerListItem from "./PlayerListItem";

interface IProps {
  players: ISBPlayers;
  addPlayer: (name: string) => void;
  removePlayer: (id: number) => void;
}

export default function PlayerList({
  players,
  addPlayer,
  removePlayer
}: IProps) {
  return (
    <div>
      <List>
        {players.map((player, index) => (
          <PlayerListItem
            key={index}
            player={player}
            removePlayer={removePlayer}
          />
        ))}
      </List>
      <PlayerForm addPlayer={addPlayer} />
    </div>
  );
}
