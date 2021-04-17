import { useDispatch } from 'react-redux';
import { handleViewRoles } from '../../../../redux/ducks/game';
import image from '../../../../assets/spy.png';
import PageTitle from '../../../Pagetitle';
import style from '../style.module.css';

function SpyMan() {
  const dispatch = useDispatch();

  const handleRoles = () => {
    dispatch(handleViewRoles());
  };

  return (
    <div className={style.spyMan} onClick={handleRoles} aria-hidden="true">
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.spyImg}>
        <img src={image} alt="imgSpy" />
      </div>
      <div className={style.spyText}>
        <h1>ТЫ ШПИОН!</h1>
        <p>
          Твоя задача - отгадать слово, которое
          <br /> узнали другие участники игры
        </p>
      </div>
    </div>
  );
}

export default SpyMan;
