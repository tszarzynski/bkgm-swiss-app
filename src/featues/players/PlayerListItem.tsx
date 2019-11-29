import { ISBPlayer } from "bkgm-swiss";
import React from "react";
import {
  IconButton,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayerIcon from "@material-ui/icons/AccountCircle";

interface IProps {
  player: ISBPlayer;
  removePlayer: (id: number) => void;
}

export default function PlayerListItem({ player, removePlayer }: IProps) {
  return (
    <ListItem>
      <ListItemText primary={player.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removePlayer(player.ID)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
