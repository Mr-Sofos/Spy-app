import React from 'react';
import style from '../style.module.css';
import PageTitle from '../../../Pagetitle';
import image from '../../../../assets/peace.png';

function Peaceful(props) {
  return (
    <div className={style.peaceful}>
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.peacefulImg}>
        <img src={image} alt="imgPeaceful" />
      </div>
      <div className={style.peacefulText}>
        <h1>Слово</h1>
        <p>
          Ты местный!
          Все игроки, кроме Шпиона знают это слово. Задавай вопросы другим
          игрокам, чтобы вычислить кто из них Шпион.
        </p>
      </div>
    </div>
  );
}

export default Peaceful;
