import React from 'react';
import { setWrapperSelected } from '../../../../redux/ducks/game';
import style from '../style.module.css';
import PageTitle from '../../../Pagetitle';
import { useDispatch, useSelector } from 'react-redux';

function Wrapper() {
  const dispatch = useDispatch();

  const playerShowed = useSelector((state) => state.game.playersShowed);

  return (
    <div
      className={style.games}
      onClick={() => {
        dispatch(setWrapperSelected());
      }}
    >
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.playerWrap}>
        <h1>{`${playerShowed}-й игрок`}</h1>
        <p>
          Тапни один раз по экрану,
          <br /> чтобы узнать свою роль
        </p>
      </div>
    </div>
  );
}

export default Wrapper;
