import React, { useState } from 'react';

import style from './style.module.css';
import List from '../../list/List';
import ListItem from '../../ListItem';
import Button from '../../button/Button';
import PageTitle from '../../pagetitle/PageTitle';
import Dialog from '../../dialog/Dialog';
import DialogButton from '../../dialog/DialogButton';
import DialogHeader from '../../dialog/DialogHeader';
import DialogBody from '../../dialog/DialogBody';

function Settings() {
  const [dialog, setDialog] = useState(false);

  const openDialogTotalPlayers = () => {
    return setDialog(true)
  }

  const closeDialog = () => {
    return setDialog(false)
  }

  return (
    <div>
      <PageTitle>Настройки партии</PageTitle>
      <List>
        <ListItem title="Количество игроков" subtitle="Выбрано: 3 игрока" onClick={openDialogTotalPlayers}/>
        <ListItem title="Количество шпионов" subtitle="Выбрано: 1 шпион" onClick={'openDialogTotalSpys'}/>
        <ListItem title="Категории слов" subtitle="Выбрано: страны, здания" onClick={'openDialogCategoriesWords'}/>
        <ListItem title="Таймер" subtitle="Выбрано: 3 минуты" onClick={'openDialogTimer'}/>
        <Button onClick={() => {alert('You are Spy!')}}>НАЧАТЬ ИГРУ</Button>
      </List>
      <Dialog open={dialog} onClose={closeDialog}>
        <DialogHeader>Количество игроков</DialogHeader>
        <DialogBody>

        </DialogBody>
      </Dialog>
    </div>
  );
}

export default Settings;
