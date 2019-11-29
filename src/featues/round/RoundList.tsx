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
import { Players, Player } from "../players/playersSlice";
import { Round, Match } from "./roundsSlice";

interface IProps {
  players: Players;
  round: Round;
}

export default function RoundList({ players, round }: IProps) {
  const getPlayer = (pr: number): Player => players.find(p => p.ID === pr)!;
  const names = round.map(({ pairing }: Match): [string, string] => {
    return [getPlayer(pairing[0]).name, getPlayer(pairing[1]).name];
  });

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {round.map((match, index) => (
          <RoundListeItem key={index} match={match} names={names[index]} />
        ))}
      </TableBody>
    </Table>
  );
}
