import React, { useState } from 'react';
import helpImg from '../../../images/help.svg';
import style from './style.module.css';
import DialogHeader from '../../dialog/DialogHeader';
import DialogTitle from '../../dialog/DialogTitle';
import DialogBody from '../../dialog/DialogBody';
import Dialog from '../../dialog/Dialog';

function Help() {
  const [dialog, setDialog] = useState(false);

  const handleClickOpen= () => {
    setDialog(true);
  }

  const closeDialog = () => {
    setDialog(false);
  }

  return (
    <>
      <div className={style.help} onClick={handleClickOpen}>
        <img src={helpImg} alt='#' />
      </div>

      <Dialog open={dialog} onClose={closeDialog}>
        <DialogHeader>
          <DialogTitle>Правила игры</DialogTitle>
        </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
        </DialogBody>
      </Dialog>
    </>

  );
}

export default Help;