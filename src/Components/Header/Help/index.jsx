import React, { useState } from 'react';
import helpImg from '../../../Assets/help.svg';
import style from './style.module.css';
import DialogHeader from '../../Dialog/DialogHeader';
import DialogTitle from '../../Dialog/DialogTitle';
import DialogBody from '../../Dialog/DialogBody';
import Dialog from '../../Dialog';

function Help() {
  const [dialog, setDialog] = useState(false);

  const handleClickOpen = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <div className={style.help} onClick={handleClickOpen}>
        <img src={helpImg} alt="#" />
      </div>

      <Dialog open={dialog} onClose={closeDialog}>
        <DialogHeader>
          <DialogTitle>Правила игры</DialogTitle>
        </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laboru
        </DialogBody>
      </Dialog>
    </>
  );
}

export default Help;
