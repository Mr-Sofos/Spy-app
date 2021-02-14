import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

function PageTitle(props) {
  return <div className={style.title}>{props.children}</div>;
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
