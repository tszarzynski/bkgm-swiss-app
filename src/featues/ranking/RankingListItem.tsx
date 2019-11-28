import { ISBPlayer } from "bkgm-swiss";
import React from "react";

interface IProps {
  player: ISBPlayer;
}

export default function RankingListItem({ player }: IProps) {
  return <div>{player.name}</div>;
}
