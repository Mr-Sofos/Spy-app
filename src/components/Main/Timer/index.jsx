import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setTime } from '../../../redux/ducks/game';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import ListItem from '../../ListItem';

function Timer({ onClose, open }) {
  const timer = Array(48)
    .fill(0)
    .map((_, i) => i + 3);
  const dispatch = useDispatch();

  const selectTimeCount = (timeCount) => {
    dispatch(setTime(timeCount));

    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader>Таймер</DialogHeader>
      <DialogBody>
        {timer.map((time) => (
          <ListItem key={time} onClick={() => selectTimeCount(time)}>
            Таймер: {time} мин.
          </ListItem>
        ))}
      </DialogBody>
    </Dialog>
  );
}

Timer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.func,
};

Timer.defaultProps = {
  onClose: PropTypes.func,
  open: PropTypes.func,
};

export default Timer;
