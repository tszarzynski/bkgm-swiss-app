import { ISBPlayers } from "bkgm-swiss";
import React from "react";
import RankingListItem from "./RankingListItem";

interface IProps {
  players: ISBPlayers;
}

export default function RankingList({ players }: IProps) {
  return (
    <div>
      <div>
        {players.map((player, index) => (
          <RankingListItem key={index} player={player} />
        ))}
      </div>
    </div>
  );
}
