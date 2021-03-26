import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import DialogContext from '../../../context';
import style from '../DialogHeader/style.module.css';

function DialogHeader(props) {
  const context = useContext(DialogContext);

  return (
    <div className={style.header}>
      {props.children}
      <div className={style.button} onClick={context}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  );
}

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogHeader;
