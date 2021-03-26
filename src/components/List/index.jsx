import React from 'react';
import PropTypes from 'prop-types';
import style from './/style.module.css';

function List(props) {
  return <ul className={style.list}>{props.children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
