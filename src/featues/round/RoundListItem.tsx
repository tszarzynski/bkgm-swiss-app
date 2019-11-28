import { ISBPlayer } from "bkgm-swiss";
import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

interface IProps {
  pair: [ISBPlayer, ISBPlayer];
}

export default function RoundListeItem({ pair: [pl1, pl2] }: IProps) {
  return (
    <TableRow>
      <TableCell align="right">{pl1.name + " vs " + pl2.name}</TableCell>
    </TableRow>
  );
}
