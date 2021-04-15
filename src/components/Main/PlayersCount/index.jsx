import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import List from '../../List';
import ListItem from '../../ListItem';
import { useDispatch } from 'react-redux';
import { setPlayers } from '../../../redux/ducks/game';

function PlayersCount(props) {
  const players = Array(48)
    .fill(0)
    .map((_, i) => i + 3);

  const dispatch = useDispatch();

  const selectPlayersCount = (count) => {
    dispatch(setPlayers(count));

    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество игроков</DialogHeader>
      <DialogBody>
        <List>
          {players.map((player) => {
            return (
              <ListItem
                key={player.toString()}
                onClick={() => selectPlayersCount(player)}
              >
                {player}
              </ListItem>
            );
          })}
        </List>
      </DialogBody>
    </Dialog>
  );
}

export default PlayersCount;
