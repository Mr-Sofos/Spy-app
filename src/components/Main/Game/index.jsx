import React from 'react';
import style from './style.module.css';
import PageTitle from '../../Pagetitle';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import SpyMan from './GameComponents/SpyMan';

function Game() {
  // const wrapper = useSelector(state => state.game.wrapper);
  //
  // if(wrapper) {
  //   return(
  //     <Switch>
  //       <Route path="/spy">
  //         <SpyMan />
  //       </Route>
  //       <Redirect to="/game" />
  //     </Switch>
  //   )
  // }


  /*
  * Этот компонент должен вернуть один из трех других:
  *
  *   1. Обложка (передача хода). Этот компонент должен быть возвращен в том
  *      случае, если state.game.wrapper = true
  *      После клика на этот компонент state.game.wrapper должен измениться на
  *      false, тогда будет выведен второй либо третий компонент
  *
  *   2. Шпион. Этот компонент выводится в случае, если
  *      state.game.wrapper = false, а значение state.game.spyOrder будет
  *      равно значению state.game.playersShowed (то есть если номер шпиона
  *      совпадает с номером текущего игрока, который смотрит свою роль.
  *
  *   3. Слово. Если условия для вывода шпиона не совпадают, то выводится этот
  *      компонент.
  *
  *  После клика на второй или третий компоненты должна быть проверка на то,
  *  остались ли еще ходы. Если остались, то state.game.wrapper нужно поменять
  *  на тру, а к значению state.game.playersShowed прибавить единицу.
  *  Если ходов не осталось (то есть state.game.playersShowed ===
  *  state.game.players, то нужно запустить таймер
  * */
  return (
    <div className={style.games} onClick={() => alert('hello looser')}>
      <PageTitle>Раздача ролей</PageTitle>
      <div className={style.playerOne}>
        <h1>ИГРОК 1</h1>
        <p>
          Тапни один раз по экрану,
          <br /> чтобы узнать свою роль
        </p>
      </div>
    </div>
  );
}

export default Game;
