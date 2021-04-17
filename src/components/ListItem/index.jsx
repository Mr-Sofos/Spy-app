import PropTypes from 'prop-types';
import style from './style.module.css';

function ListItem({ children, onClick, subtitle }) {
  return (
    <li className={style.list} onClick={onClick} aria-hidden="true">
      <div>
        <div className={style.title}>{children}</div>
        {subtitle && <div className={style.subtitle}>{subtitle}</div>}
      </div>
      <div className={style.icon}>
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
