import React from 'react';
import style from '../style.module.css';
import image from '../../../../assets/spy.png';
import PageTitle from '../../../Pagetitle';

function SpyMan(props) {
  return (
    <div className={style.spyMan}>
      <PageTitle>Раздача ролей</PageTitle>
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
