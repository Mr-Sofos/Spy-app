import React, { useState } from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import Button from '../../Button';
import PlayersCount from '../../PlayersCount';
import PageTitle from '../../Pagetitle';
import SpiesCount from '../../SpiesCount';

function Settings() {
  const [playerDialog, setPlayerDialog] = useState(false);

  const openDialogTotalPlayers = () => {
    return setPlayerDialog(true);
  };

  const closeDialogTotalPlayers = () => {
    return setPlayerDialog(false);
  };

  const [spiesDialog, setSpiesDialog] = useState(false);

  const openDialogTotalSpies = () => {
    return setSpiesDialog(true);
  }

  const closeDialogTotalSpies = () => {
    return setSpiesDialog(false);
  }



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
          onClick={openDialogTotalSpies}
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
      <PlayersCount open={playerDialog} onClose={closeDialogTotalPlayers} />
      <SpiesCount open={spiesDialog} onClose={closeDialogTotalSpies} />
    </div>
  );
}

export default Settings;
