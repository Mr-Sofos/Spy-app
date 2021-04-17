import { useSelector } from 'react-redux';
import SpyMan from './GameComponents/SpyMan';
import Peaceful from './GameComponents/Peaceful';
import Wrapper from './GameComponents/Wrapper';
import TimerGame from './GameComponents/TimerGame';

function Game() {
  const playerShowed = useSelector((state) => state.game.playersShowed);

  const players = useSelector((state) => state.game.playersCount);

  const spiesOrder = useSelector((state) => state.game.spiesOrder);

  const wrapper = useSelector((state) => state.game.wrapper);

  if (wrapper) {
    return <Wrapper />;
  }

  if (spiesOrder.indexOf(playerShowed) !== -1) {
    return <SpyMan />;
  }

  if (players >= playerShowed) {
    return <Peaceful />;
  }

  return <TimerGame />;
}

export default Game;
