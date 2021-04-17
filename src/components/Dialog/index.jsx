import PropTypes from 'prop-types';
import DialogContext from '../../context';
import style from './style.module.css';

function Dialog({ children, onClose, open }) {
  return (
    <div className={`${style.dialog} ${open ? style.active : ''}`}>
      <div className={style['dialog-content']}>
        <DialogContext.Provider value={onClose}>
          {children}
        </DialogContext.Provider>
      </div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
