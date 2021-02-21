import React from 'react';
import PropTypes from 'prop-types';

import style from '../DialogBody/style.module.css';

function DialogBody(props) {
  return <div className={style['dialog-body']}>{props.children}</div>;
}

DialogBody.propTypes = {
  childre: PropTypes.node.isRequired,
};

export default DialogBody;
