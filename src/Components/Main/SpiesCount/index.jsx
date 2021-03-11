import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import List from '../../List';
import ListItem from '../../ListItem';
import { useDispatch } from 'react-redux';
import { setSpies } from '../../../redux/ducks/game';

function SpiesCount(props) {
  const dispatch = useDispatch();
  const spies = [1, 2, 3, 4, 5];

  const selectSpiesCount = (count) => {
    dispatch(setSpies(count))

    props.onClose()
  }
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество шпионов</DialogHeader>
      <DialogBody>
        <List>
          {spies.map(spy => {
            return (
              <ListItem onClick={() => selectSpiesCount(spy)}>
                {spy}
              </ListItem>
            )
          })}
        </List>
      </DialogBody>
    </Dialog>
  );
}

export default SpiesCount
