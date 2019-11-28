import {
  Avatar,
  Container,
  CssBaseline,
  makeStyles,
  Typography
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/reducers";
import PlayerList from "./PlayerList";
import { addPlayer, removePlayer } from "./playersSlice";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

export default function PlayerListPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { players } = useSelector((state: RootState) => state);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TitleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Players
        </Typography>
        <div className={classes.form}>
          <PlayerList
            players={players}
            removePlayer={(playerID: number) => {
              dispatch(removePlayer({ playerID }));
            }}
            addPlayer={(name: string) => {
              dispatch(addPlayer(name));
            }}
          />
        </div>
      </div>
    </Container>
  );
}
