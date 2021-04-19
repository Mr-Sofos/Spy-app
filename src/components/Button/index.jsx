import PropTypes from 'prop-types';

function Button({ children, onClick, size }) {
  return (
    <button className={size} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default Button;
