import React, { useState } from 'react';
import List from '../../list/List';
import ListItem from '../../ListItem';
import PageTitle from '../../pagetitle/PageTitle';
import Dialog from '../../dialog/Dialog';
import DialogHeader from '../../dialog/DialogHeader';
import DialogBody from '../../dialog/DialogBody';
import Button from '../../Button';

function Settings() {
  const [dialog, setDialog] = useState(false);

  const openDialogTotalPlayers = () => {
    return setDialog(true);
  };

  const closeDialog = () => {
    return setDialog(false);
  };

  return (
    <div>
      <PageTitle>Настройки партии</PageTitle>
      <List>
        <ListItem
          title="Количество игроков"
          subtitle="Выбрано: 3 игрока"
          onClick={openDialogTotalPlayers}
        />
        <ListItem
          title="Количество шпионов"
          subtitle="Выбрано: 1 шпион"
          onClick={'openDialogTotalSpys'}
        />
        <ListItem
          title="Категории слов"
          subtitle="Выбрано: страны, здания"
          onClick={'openDialogCategoriesWords'}
        />
        <ListItem
          title="Таймер"
          subtitle="Выбрано: 3 минуты"
          onClick={'openDialogTimer'}
        />
        <Button
          onClick={() => {
            alert('You are Spy!');
          }}
        >
          НАЧАТЬ ИГРУ
        </Button>
      </List>
      <Dialog open={dialog} onClose={closeDialog}>
        <DialogHeader>Количество игроков</DialogHeader>
        <DialogBody></DialogBody>
      </Dialog>
    </div>
  );
}

export default Settings;
