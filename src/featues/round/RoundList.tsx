import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { ISBPairing, ISBPairings, ISBPlayer, ISBPlayers } from "bkgm-swiss";
import React from "react";
import RoundListeItem from "./RoundListItem";

interface IProps {
  players: ISBPlayers;
  pairings: ISBPairings;
}

export default function RoundList({ players, pairings }: IProps) {
  const getPlayer = (pr: number) => players.find(p => p.ID === pr);
  const pairs = pairings.map(([pr1, pr2]: ISBPairing): [
    ISBPlayer,
    ISBPlayer
  ] => {
    return [getPlayer(pr1)!, getPlayer(pr2)!];
  });

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pairs.map((pair, index) => (
          <RoundListeItem key={index} pair={pair} />
        ))}
      </TableBody>
    </Table>
  );
}
