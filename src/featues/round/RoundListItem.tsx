import { ISBPlayer } from "bkgm-swiss";
import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Match } from "./roundsSlice";

interface IProps {
  match: Match;
  names: [string, string];
}

export default function RoundListeItem({ match, names }: IProps) {
  return (
    <TableRow>
      <TableCell align="right">
        {names[0] +
          " " +
          match.result[0] +
          ":" +
          match.result[1] +
          " " +
          names[1]}
      </TableCell>
    </TableRow>
  );
}
