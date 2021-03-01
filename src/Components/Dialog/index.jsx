import React from 'react';
import PropTypes from 'prop-types';
import DialogContext from '../../Context';
import style from './style.module.css';

function Dialog(props) {
  return (
    <div className={`${style.dialog} ${props.open ? style.active : ''}`}>
      <div className={style['dialog-content']}>
        <DialogContext.Provider value={props.onClose}>
          {props.children}
        </DialogContext.Provider>
      </div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Dialog;
