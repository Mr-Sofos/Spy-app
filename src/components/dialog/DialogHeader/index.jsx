import React from 'react';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react'
import DialogContext from "../../../context/DialogContext";


import style from '../DialogHeader/style.module.css';

function DialogHeader(props) {
  const context = useContext(DialogContext)

  return <div className={style.header}>
    {props.children}
    <div className={style.button} onClick={props.context}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>;
}

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogHeader;
