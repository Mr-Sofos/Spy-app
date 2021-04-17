import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import Completionist from './Completionist';
import style from '../style.module.css';

function TimerGame() {
  const time = useSelector((state) => state.game.timer) * 60 * 1000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div className={style.timerWrap}>
        <div className={style.timer}>
          {minutes}:{seconds}
        </div>
        <div className={style.timerText}>
          Начинайте задавать впоросы! Успейте вычислить Шпиона прежде, чем
          истечёт время, иначе он победит.
        </div>
      </div>
    );
  };

  return <Countdown date={Date.now() + time} renderer={renderer} />;
}

export default TimerGame;
