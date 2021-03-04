import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';

function PlayersCount(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество игроков</DialogHeader>
      <DialogBody>123456789</DialogBody>
    </Dialog>
  );
}

export default PlayersCount;
