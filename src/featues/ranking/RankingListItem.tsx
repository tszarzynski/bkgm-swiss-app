import { ISBPlayer } from "bkgm-swiss";
import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

interface IProps {
  player: ISBPlayer;
  rank: number;
}

export default function RankingListItem({ player, rank }: IProps) {
  return (
    <TableRow key={player.name}>
      <TableCell component="th" scope="row">
        {rank}
      </TableCell>
      <TableCell align="right">{player.name}</TableCell>
      <TableCell align="right">{player.matchesWon}</TableCell>
      <TableCell align="right">{player.matchesLost}</TableCell>
    </TableRow>
  );
}
