import React from 'react';
import PropTypes from 'prop-types';

import style from '../DialogTitle/style.module.css';

function DialogTitle(props) {
  return <div className={style.title}>{props.children}</div>;
}

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogTitle;
