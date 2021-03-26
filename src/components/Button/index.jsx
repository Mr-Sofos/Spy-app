import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
