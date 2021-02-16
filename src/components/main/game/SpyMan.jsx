import React from 'react';
import style from './style.module.css';
import DistributionOfRoles from './DistributionOfRoles';
import Spy from '../../../images/spy.png';

function Spy (props) {
  return (
    <div className={style.spy}>
      <DistributionOfRoles/>
      <div className={style.spyImg}>
        <img src={Spy} alt='imgSpy'/>
      </div>
      <div className={style.spyText}>
        <h1>ТЫ ШПИОН!</h1>
        <p>Твоя задача - отгадать слово, которое<br/> узнали другие участники игры</p>
      </div>
    </div>
  );
}

export default Spy;