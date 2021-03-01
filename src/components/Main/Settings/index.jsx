import React, { useState } from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import Button from '../../Button';
import PlayersCount from '../../PlayersCount';
import PageTitle from '../../Pagetitle';

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
          onClick={() => {}}
        />
        <ListItem
          title="Категории слов"
          subtitle="Выбрано: страны, здания"
          onClick={() => {}}
        />
        <ListItem
          title="Таймер"
          subtitle="Выбрано: 3 минуты"
          onClick={() => {}}
        />
        <Button
          onClick={() => {
            alert('You are Spy!');
          }}
        >
          НАЧАТЬ ИГРУ
        </Button>
      </List>
      <PlayersCount open={dialog} onClose={closeDialog} />
    </div>
  );
}

export default Settings;
