import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';
import { useDispatch } from 'react-redux';
import ListItem from '../../ListItem';
import { setTime } from '../../../redux/ducks/game';

function Timer(props) {
  const timer = Array(48).fill(0).map((_, i) => i + 3);
  const dispatch = useDispatch();

  const selectTimeCount = (timeCount) => {
    dispatch(setTime(timeCount));

    props.onClose()
  }
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Таймер</DialogHeader>
      <DialogBody>
        {timer.map(time => {
          return (
            <ListItem key={time} onClick={() => selectTimeCount(time)}>
              {time}
            </ListItem>
          )
        })}
      </DialogBody>
    </Dialog>
  );
}

export default Timer;
