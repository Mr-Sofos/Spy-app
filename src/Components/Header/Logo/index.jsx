import React from 'react';
import Spy from '../../../Assets/spy.png';
import style from './style.module.css';

function Index() {
  return (
    <div className={style.logo}>
      <img src={Spy} alt="#" />
      <span>ШПИОН</span>
    </div>
  );
}

export default Index;
