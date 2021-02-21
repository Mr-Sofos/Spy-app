import React from 'react';
import Logo from '../header/logo/Logo';
import Book from '../header/book/Book';
import Help from '../header/help/Help';
import { Link } from 'react-router-dom'

import style from './style.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style['block-logo']}>
        <Logo />
      </div>
      <div className={style['block-helps']}>
        <Link to="/categories">
          <Book />
        </Link>
        <Help />
      </div>
    </div>
  );
}

export default Header;
