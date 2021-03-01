import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';

function Timer(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Таймер</DialogHeader>
      <DialogBody>Тик-Так</DialogBody>
    </Dialog>
  );
}

export default Timer;
