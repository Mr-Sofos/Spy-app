import React from 'react';
import bookImg from '../../../Assets/book.svg';
import style from './style.module.css';

function Book() {
  return (
    <div className={style.book}>
      <img src={bookImg} alt="#" />
    </div>
  );
}

export default Book;
