import React, { useState } from 'react';
import List from '../../List';
import ListItem from '../../ListItem';
import Button from '../../Button';
import PlayersCount from '../PlayersCount';
import PageTitle from '../../Pagetitle';
import SpiesCount from '../SpiesCount';
import Timer from '../Timer';
import Words from '../Words';
import { useDispatch, useSelector } from 'react-redux';
import { pluralize } from 'numeralize-ru';
import { setStartGame } from '../../../redux/ducks/game';

function Settings() {
  const [playerDialog, setPlayerDialog] = useState(false);

  const [spiesDialog, setSpiesDialog] = useState(false);

  const [categoriesWordsDialog, setCategoriesWordsDialog] = useState(false);

  const [timerDialog, setTimerDialog] = useState(false);

  const settings = useSelector((state) => {
    return {
      timer: state.game.timer,
      players: state.game.players,
      spies: state.game.spies,
      selectedCategories: state.game.selectedCategories,
    };
  });
  //получил массив объектов
  const selectedCategories = useSelector((state) => state.categories.items);
  // получил id выбранных слов в категории
  const idCategory = settings.selectedCategories;
  // вывел на экран выбранную категорию с помощью Ахьмада
  const wordsCategory = () => {
    if (idCategory.length === selectedCategories.length) {
      return 'все';
    }

    return selectedCategories
      .reduce((actuallyWords, item) => {
        if (idCategory.indexOf(item.id) !== -1) {
          return [...actuallyWords, item.name];
        }

        return actuallyWords;
      }, [])
      .join(', ');
  };

  const openDialogTotalPlayers = () => {
    setPlayerDialog(true);
  };

  const closeDialogTotalPlayers = () => {
    setPlayerDialog(false);
  };

  const openDialogTotalSpies = () => {
    setSpiesDialog(true);
  };

  const closeDialogTotalSpies = () => {
    setSpiesDialog(false);
  };

  const openCategoriesWordsDialog = () => {
    setCategoriesWordsDialog(true);
  };

  const closeCategoriesWordsDialog = () => {
    setCategoriesWordsDialog(false);
  };

  const openTimerDialog = () => {
    setTimerDialog(true);
  };

  const closeTimerDialog = () => {
    setTimerDialog(false);
  };

  const countPlayers = pluralize(
    settings.players,
    'игрок',
    'игрока',
    'игроков',
  );
  const countSpies = pluralize(settings.spies, 'шпион', 'шпиона', 'шпионов');
  const timeCount = pluralize(settings.timer, 'минута', 'минуты', 'минут');

  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setStartGame())
  }

  return (
    <div>
      <PageTitle>Настройки партии</PageTitle>
      <List>
        <ListItem
          subtitle={`Выбрано: ${settings.players} ${countPlayers}`}
          onClick={openDialogTotalPlayers}
        >
          Количество игроков
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${settings.spies} ${countSpies}`}
          onClick={openDialogTotalSpies}
        >
          Количество шпионов
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${wordsCategory()}`}
          onClick={openCategoriesWordsDialog}
        >
          Категории слов
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${settings.timer} ${timeCount}`}
          onClick={openTimerDialog}
        >
          Таймер
        </ListItem>
        <Button onClick={() => startGame()}>НАЧАТЬ ИГРУ</Button>
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
