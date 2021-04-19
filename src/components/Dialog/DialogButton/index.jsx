import PropTypes from 'prop-types';
import style from './style.module.css';

function DialogButton({ onClick }) {
  return (
    <div className={style.button} onClick={onClick} aria-hidden="true">
      <i className="fa fa-times" aria-hidden="true" />
    </div>
  );
}

DialogButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DialogButton;
