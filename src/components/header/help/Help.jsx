import React from 'react';
import helpImg from '../../../images/help.svg';
import style from './style.module.css';

function Help() {
  const handleClickOpen= () => {
    alert("hello")
  }

  return (
    <div className={style.help} onClick={handleClickOpen}>
      <img src={helpImg} alt='#' />

    </div>
  );
}

export default Help;