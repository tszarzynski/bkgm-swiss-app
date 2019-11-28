import { ISBPlayers } from "bkgm-swiss";
import React from "react";
import RankingListItem from "./RankingListItem";
import {
  TableCell,
  TableRow,
  TableHead,
  Table,
  Paper,
  makeStyles,
  TableBody
} from "@material-ui/core";

interface IProps {
  players: ISBPlayers;
}
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {}
});
export default function RankingList({ players }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Wins</TableCell>
            <TableCell align="right">Loses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, index) => (
            <RankingListItem rank={index} player={player} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
