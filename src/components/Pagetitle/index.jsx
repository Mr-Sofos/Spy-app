import PropTypes from 'prop-types';
import style from './style.module.css';

function PageTitle({ children }) {
  return <div className={style.title}>{children}</div>;
}

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
