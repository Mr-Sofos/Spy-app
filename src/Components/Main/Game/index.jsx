import React from 'react';
import style from './style.module.css';
import PageTitle from '../../Pagetitle';

function Game() {
  return (
    <div className={style.games}>
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.playerOne}>
        <h1>ИГРОК 1</h1>
        <p>
          Тапни один раз по экрану,
          <br /> чтобы узнать свою роль
        </p>
      </div>
    </div>
  );
}

export default Game;
