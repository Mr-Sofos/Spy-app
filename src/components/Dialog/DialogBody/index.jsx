import PropTypes from 'prop-types';
import style from './style.module.css';

function DialogBody({ children }) {
  return <div className={style.dialogBody}>{children}</div>;
}

DialogBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogBody;
