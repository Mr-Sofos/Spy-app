import React from 'react';
import Dialog from '../../Dialog';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogBody from '../../Dialog/DialogBody';

function Words(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogHeader>Категории слов</DialogHeader>
      <DialogBody>Зима, Осень и тд</DialogBody>
    </Dialog>
  );
}

export default Words;
