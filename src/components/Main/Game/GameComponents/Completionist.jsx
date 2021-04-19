import { useDispatch, useSelector } from 'react-redux';
import { startGameAgain } from '../../../../redux/ducks/game';
import Button from '../../../Button';
import style from '../style.module.css';

function Completionist() {
  const dispatch = useDispatch();

  const spiesOrder = useSelector((state) => state.game.spiesOrder);

  const handleStartAgain = () => dispatch(startGameAgain());

  return (
    <div className={style.endGame}>
      <div className={style.completionist}>
        <div className={style.spies}>Шпионы:</div>
        <div className={style.playersSpies}>{spiesOrder.join(', ')}</div>
      </div>
      <Button onClick={handleStartAgain}>НАЧАТЬ ЗАНОВО</Button>
    </div>
  );
}

export default Completionist;
