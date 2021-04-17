import PropTypes from 'prop-types';
import style from './style.module.css';

function Button({ children, onClick }) {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
