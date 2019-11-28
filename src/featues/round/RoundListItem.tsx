import { ISBPlayer } from "bkgm-swiss";
import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

interface IProps {
  player: ISBPlayer;
}

export default function RoundListeItem({ player }: IProps) {
  return (
    <TableRow>
      <TableCell align="right">{player.name}</TableCell>
    </TableRow>
  );
}
