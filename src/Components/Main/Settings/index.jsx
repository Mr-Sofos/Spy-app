import React, { useState } from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import Button from '../../Button';
import PlayersCount from '../PlayersCount';
import PageTitle from '../../Pagetitle';
import SpiesCount from '../SpiesCount';
import Timer from '../Timer';
import Words from '../Words';

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
  };
  const closeDialogTotalSpies = () => {
    return setSpiesDialog(false);
  };

  const [categoriesWordsDialog, setCategoriesWordsDialog] = useState(false);
  const openCategoriesWordsDialog = () => {
    return setCategoriesWordsDialog(true);
  };
  const closeCategoriesWordsDialog = () => {
    setCategoriesWordsDialog(false);
  };

  const [timerDialog, setTimerDialog] = useState(false);
  const openTimerDialog = () => {
    setTimerDialog(true);
  };
  const closeTimerDialog = () => {
    setTimerDialog(false);
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
          onClick={openDialogTotalSpies}
        />
        <ListItem
          title="Категории слов"
          subtitle="Выбрано: страны, здания"
          onClick={openCategoriesWordsDialog}
        />
        <ListItem
          title="Таймер"
          subtitle="Выбрано: 3 минуты"
          onClick={openTimerDialog}
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
      <Words
        open={categoriesWordsDialog}
        onClose={closeCategoriesWordsDialog}
      />
      <Timer open={timerDialog} onClose={closeTimerDialog} />
    </div>
  );
}

export default Settings;
