import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { ISBPlayers } from "bkgm-swiss";
import React from "react";
import RoundListeItem from "./RoundListItem";

interface IProps {
  players: ISBPlayers;
}

export default function RoundList({ players }: IProps) {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {players.map((player, index) => (
          <RoundListeItem key={index} player={player} />
        ))}
      </TableBody>
    </Table>
  );
}
