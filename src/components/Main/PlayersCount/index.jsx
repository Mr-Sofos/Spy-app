import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import List from '../../List';
import ListItem from '../../ListItem';
import { useDispatch } from 'react-redux';
import { setPlayers } from '../../../redux/ducks/game';


function PlayersCount(props) {
  const players = [3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useDispatch();

  const selectPlayersCount = (count) => {
    dispatch(setPlayers(count))

    props.onClose();
  }

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество игроков</DialogHeader>
      <DialogBody>
        <List>
            {players.map(player => {
              return(
                <ListItem onClick={() => selectPlayersCount(player)}>
                  {player}
                </ListItem>
              )
            })}
        </List>
      </DialogBody>
    </Dialog>
  );
}

export default PlayersCount;
