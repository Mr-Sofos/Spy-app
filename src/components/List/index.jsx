import PropTypes from 'prop-types';
import style from './style.module.css';

function List({ children }) {
  return <ul className={style.list}>{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
