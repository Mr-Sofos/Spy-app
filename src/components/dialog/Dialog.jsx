import React from 'react';
import PropTypes from 'prop-types';

import style from '../dialog/style.module.css';

function Dialog(props) {
  return (
    <div className={`${style.dialog} ${props.open ? style.active : ''}`}>
      <div className={style['dialog-content']}>{props.children}</div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.bool.isRequired,
};

export default Dialog;
