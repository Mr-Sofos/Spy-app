import { Link } from 'react-router-dom';
import Logo from './Logo';
import Book from './Book';
import Help from './Help';
import style from './style.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style['block-Index']}>
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
