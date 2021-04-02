import React from 'react';
import style from '../style.module.css';
import PageTitle from '../../../Pagetitle';
import image from '../../../../assets/peace.png';
import { useDispatch, useSelector } from 'react-redux';
import { setWrapperSelected } from '../../../../redux/ducks/game';

function Peaceful() {
  const dispatch = useDispatch();

  const arr = useSelector((state) => state.categories.items);

  const idArr = useSelector((state) => state.game.selectedCategories);

  // вывел на экран выбранную категорию с помощью reduce
  const words = () => {
    if (idArr.length === arr.length) {
      return 'все';
    }

    return arr
      .reduce((actuallyWords, item) => {
        if (idArr.indexOf(item.id) !== -1) {
          return [...actuallyWords, item.name];
        }

        return actuallyWords;
      }, [])
      .join(', ');
  };

  return (
    <div
      className={style.peaceful}
      onClick={() => {
        dispatch(() => dispatch({type: 'eee'}));
      }}
    >
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.peacefulImg}>
        <img src={image} alt="imgPeaceful" />
      </div>
      <div className={style.peacefulText}>
        <h1>{words()}</h1>
        <p>
          Ты местный! Все игроки кроме Шпиона, знают это слово. Задавай вопросы
          другим игрокам, чтобы вычислить кто из них Шпион.
        </p>
      </div>
    </div>
  );
}

export default Peaceful;
