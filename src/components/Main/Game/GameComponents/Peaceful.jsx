import { useDispatch, useSelector } from 'react-redux';
import { handleViewRoles } from '../../../../redux/ducks/game';
import PageTitle from '../../../Pagetitle';
import image from '../../../../assets/peace.png';
import style from '../style.module.css';

function Peaceful() {
  const dispatch = useDispatch();

  const word = useSelector((state) => state.game.currentWord);

  const handleRoles = () => {
    dispatch(handleViewRoles());
  };

  return (
    <div className={style.peaceful} onClick={handleRoles} aria-hidden="true">
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.peacefulImg}>
        <img src={image} alt="imgPeaceful" />
      </div>
      <div className={style.peacefulText}>
        <h1 className={style.word}>{word}</h1>
        <p>
          Ты местный! Все игроки кроме Шпиона, знают это слово. Задавай вопросы
          другим игрокам, чтобы вычислить кто из них Шпион.
        </p>
      </div>
    </div>
  );
}

export default Peaceful;
