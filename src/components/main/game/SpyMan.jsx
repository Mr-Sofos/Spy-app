import React from 'react';
import style from './style.module.css';
import DistributionOfRoles from './DistributionOfRoles';
import image from '../../../images/spy.png';

function SpyMan(props) {
  return (
    <div className={style.spyMan}>
      <DistributionOfRoles />
      <div className={style.spyImg}>
        <img src={image} alt="imgSpy" />
      </div>
      <div className={style.spyText}>
        <h1>ТЫ ШПИОН!</h1>
        <p>
          Твоя задача - отгадать слово, которое
          <br /> узнали другие участники игры
        </p>
      </div>
    </div>
  );
}

export default SpyMan;
