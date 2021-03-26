import React from 'react';
import bookImg from '../../../assets/book.svg';
import style from './style.module.css';

function Book() {
  return (
    <div className={style.book}>
      <img src={bookImg} alt="#" />
    </div>
  );
}

export default Book;
