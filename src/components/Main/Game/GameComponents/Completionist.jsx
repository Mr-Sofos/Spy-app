import React from 'react';
import style from '../style.module.css';
import { useSelector } from 'react-redux';

function Completionist() {
  const spiesOrder = useSelector((state) => state.game.spiesOrder);

  return (
    <div className={style.endGame}>
      <div className={style.completionist}>
        <div className={style.spies}>Шпионы:</div>
        <div className={style.playersSpies}>{spiesOrder.join(', ')}</div>
      </div>
    </div>
  );
}

export default Completionist;
