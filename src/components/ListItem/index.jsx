import React from 'react';
import PropTypes from 'prop-types';
import style from '../ListItem/style.module.css';

function ListItem(props) {
  return (
    <li className={style.list} onClick={props.onClick}>
      <div>
        <div className={style.title}>{props.children}</div>
        {props.subtitle && (
          <div className={style.subtitle}>{props.subtitle}</div>
        )}
      </div>
      <div className={style.icon}>
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListItem;
