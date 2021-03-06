import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { PlayerWithStats } from "bkgm-swiss";
import React from "react";
import RankingListItem from "./RankingListItem";

interface IProps {
  players: PlayerWithStats[];
}

export default function RankingList({ players }: IProps) {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Wins</TableCell>
          <TableCell align="right">Points</TableCell>
          <TableCell align="right">OMV</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {players.map((player, index) => (
          <RankingListItem key={index} rank={index + 1} player={player} />
        ))}
      </TableBody>
    </Table>
  );
}
