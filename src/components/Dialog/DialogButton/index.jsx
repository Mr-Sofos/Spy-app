import React from 'react';
import PropTypes from 'prop-types';

import style from '../DialogButton/style.module.css';

function DialogButton(props) {
  return (
    <div className={style.button} onClick={props.onClick}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </div>
  );
}

DialogButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DialogButton;
