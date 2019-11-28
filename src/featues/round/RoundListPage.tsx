import {
  Avatar,
  Container,
  CssBaseline,
  makeStyles,
  Typography
} from "@material-ui/core";
import TitleIcon from "@material-ui/icons/List";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/reducers";
import RoundList from "./RoundList";

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

export default function RoundListPage() {
  const classes = useStyles();
  const { players } = useSelector((state: RootState) => state);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TitleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Round
        </Typography>
        <div className={classes.form}>
          <RoundList players={players} />
        </div>
      </div>
    </Container>
  );
}
