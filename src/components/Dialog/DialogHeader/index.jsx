import { useContext } from 'react';
import PropTypes from 'prop-types';
import DialogContext from '../../../context';
import style from './style.module.css';

function DialogHeader({ children }) {
  const context = useContext(DialogContext);

  return (
    <div className={style.header}>
      {children}
      <div className={style.button} onClick={context} aria-hidden="true">
        <i className="fa fa-times" aria-hidden="true" />
      </div>
    </div>
  );
}

DialogHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogHeader;
