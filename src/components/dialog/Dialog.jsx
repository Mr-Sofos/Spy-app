import React from 'react';
import PropTypes from 'prop-types';
import DialogContext from '../../context/DialogContext';
import style from '../dialog/style.module.css';

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
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
