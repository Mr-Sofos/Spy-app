import React from 'react';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';

function SpiesCount(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Количество шпионов</DialogHeader>
      <DialogBody>12345</DialogBody>
    </Dialog>
  );
}

export default SpiesCount;
