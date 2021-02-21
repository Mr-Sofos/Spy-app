import React from 'react';
import Spy from '../../../images/spy.png';
import style from './style.module.css'

function Logo() {
  return (
    <div className={style.logo}>
      <img src={Spy} alt='#' />
      <span>ШПИОН</span>
    </div>
  );
}

export default Logo;
