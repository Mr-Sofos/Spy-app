import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function DialogBody(props) {
  return <div className={style.dialogBody}>{props.children}</div>;
}

DialogBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogBody;
