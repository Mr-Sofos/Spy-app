import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import List from '../../List';
import ListItem from '../../ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { setSpies } from '../../../redux/ducks/game';
import { getSpiesCountArray } from '../../../utils/spiesHelpers';

function SpiesCount(props) {
  const dispatch = useDispatch();
  const playersCount = useSelector(state => state.game.playersCount);

  //TODO Объяснить useMemo
  const spiesCount = getSpiesCountArray(playersCount);



  const selectSpiesCount = (count) => {
    dispatch(setSpies(count))

    props.onClose()
  }
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество шпионов</DialogHeader>
      <DialogBody>
        <List>
          {spiesCount.map(spy => {
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
