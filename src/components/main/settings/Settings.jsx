import React from 'react';
import { useState } from 'react'
import Dialog from '../../dialog/Dialog';
import DialogHeader from '../../dialog/DialogHeader/index'
import DialogTitle from '../../dialog/DialogTitle/index'
import DialogButton from '../../dialog/DialogButton/index'
import DialogBody from '../../dialog/DialogBody/index'
import List from '../../list/List';
import ListItem from '../../ListItem';



import style from './style.module.css';
import { useHistory } from 'react-router-dom';

function Settings() {
  const history = useHistory()

  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true)
  }
  const closeDialog = () => {
    setDialog(false)
  }
  
  console.log(dialog)
  // onClick={() => history.push('/fytyt')}

  return (
    <div>
      <List>
        <ListItem title="fgfgfgfg" subtitle="aaaaaa"  onClick={openDialog} />
        <ListItem title="fgfgfgfg" subtitle="aaaaaa" onClick={openDialog} />
      </List>
      <Dialog open={dialog}>
        <DialogHeader>
          <DialogTitle>11111</DialogTitle>
          <DialogButton onClick = {closeDialog} />
        </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DialogBody>
      </Dialog>
    </div>
  );
}

export default Settings;
