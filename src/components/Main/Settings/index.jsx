import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectedCategoriesSelector,
  startGame,
} from '../../../redux/ducks/game';
import {
  countPlayers,
  countSpies,
  timeCount,
} from '../../../utils/spiesHelpers';
import List from '../../List';
import ListItem from '../../ListItem';
import Button from '../../Button';
import PlayersCount from '../PlayersCount';
import PageTitle from '../../Pagetitle';
import SpiesCount from '../SpiesCount';
import Timer from '../Timer';
import Words from '../Words';

function Settings() {
  // диалоговое окно выбора количества игроков
  const [playerDialog, setPlayerDialog] = useState(false);

  // диалоговое окно выбора количества шпионов
  const [spiesDialog, setSpiesDialog] = useState(false);

  // диалоговое окно выбора категории слов
  const [categoriesWordsDialog, setCategoriesWordsDialog] = useState(false);

  // диалоговое окно выбора таймера
  const [timerDialog, setTimerDialog] = useState(false);

  // для сокращения и читабельности кода, произведена деструктуризация
  const settings = useSelector((state) => ({
    timer: state.game.timer,
    players: state.game.playersCount,
    spies: state.game.spiesCount,
  }));

  const categories = useSelector(selectedCategoriesSelector);

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

  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div>
      <PageTitle>Настройки партии</PageTitle>
      <List>
        <ListItem
          subtitle={`Выбрано: ${settings.players} ${countPlayers(
            settings.players,
          )}`}
          onClick={openDialogTotalPlayers}
        >
          Количество игроков
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${settings.spies} ${countSpies(settings.spies)}`}
          onClick={openDialogTotalSpies}
        >
          Количество шпионов
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${categories}`}
          onClick={openCategoriesWordsDialog}
        >
          Категории слов
        </ListItem>
        <ListItem
          subtitle={`Выбрано: ${settings.timer} ${timeCount(settings.timer)}`}
          onClick={openTimerDialog}
        >
          Таймер
        </ListItem>
        <Button onClick={handleStartGame}>НАЧАТЬ ИГРУ</Button>
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
