import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setSpies } from '../../../redux/ducks/game';
import { getSpiesCountArray } from '../../../utils/spiesHelpers';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import List from '../../List';
import ListItem from '../../ListItem';

function SpiesCount({ onClose, open }) {
  const dispatch = useDispatch();
  const playersCount = useSelector((state) => state.game.playersCount);

  // использую хук useMemo для оптимизации кода...
  const spiesCount = useMemo(() => getSpiesCountArray(playersCount), []);

  const selectSpiesCount = (count) => {
    dispatch(setSpies(count));

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader>Количество шпионов</DialogHeader>
      <DialogBody>
        <List>
          {spiesCount.map((spy) => (
            <ListItem key={spy} onClick={() => selectSpiesCount(spy)}>
              {spy}
            </ListItem>
          ))}
        </List>
      </DialogBody>
    </Dialog>
  );
}

SpiesCount.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};

export default SpiesCount;
