import React from 'react';
import PropTypes from 'prop-types';

import style from '../DialogHeader/style.module.css';

function DialogHeader(props) {
  return <div className={style.header}>
    {props.children}
    {/* <div className={style.button} onClick={props.onClick}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </div> */}
  </div>;
}

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogHeader;
