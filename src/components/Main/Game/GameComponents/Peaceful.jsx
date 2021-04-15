import React from 'react';
import style from '../style.module.css';
import PageTitle from '../../../Pagetitle';
import image from '../../../../assets/peace.png';
import { useDispatch, useSelector } from 'react-redux';
import { setHandle } from '../../../../redux/ducks/game';

function Peaceful() {
  const dispatch = useDispatch();

  const word = useSelector((state) => state.game.currentWord);

  const handle = () => {
    dispatch(setHandle());
  };
  return (
    <div className={style.peaceful} onClick={handle}>
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.peacefulImg}>
        <img src={image} alt="imgPeaceful" />
      </div>
      <div className={style.peacefulText}>
        <h1 className={style.word}>{word}</h1>
        <p>
          Ты местный! Все игроки кроме Шпиона, знают это слово. Задавай вопросы
          другим игрокам, чтобы вычислить кто из них Шпион.
        </p>
      </div>
    </div>
  );
}

export default Peaceful;
