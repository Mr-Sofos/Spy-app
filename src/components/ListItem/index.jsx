import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from '../ListItem/style.module.css';

function ListItem(props) {
  return (
    <li className={style.list} onClick={props.onClick}>
        <div>
          <div className={style.title}>{props.title}</div>
          <div className={style.subtitle}>{props.subtitle}</div>
        </div>
        <div className={style.icon}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ListItem;
