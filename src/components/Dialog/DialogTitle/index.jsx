import PropTypes from 'prop-types';
import style from './style.module.css';

function DialogTitle({ children }) {
  return <div className={style.title}>{children}</div>;
}

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogTitle;
