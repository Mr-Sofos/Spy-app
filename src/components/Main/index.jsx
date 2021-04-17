import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Categories from './Сategories';
import SpyMan from './Game/GameComponents/SpyMan';
import Game from './Game';
import Settings from './Settings';
import Timer from './Timer';
import Words from './Words';
import Peaceful from './Game/GameComponents/Peaceful';

function Main() {
  const started = useSelector((state) => state.game.started);

  // если игра начата, доступны только следующие роуты: game
  if (started) {
    return (
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Redirect to="/game" />
      </Switch>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Settings />
        </Route>
        <Route path="/spy">
          <SpyMan />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/words/:id">
          <Words />
        </Route>
        <Route path="/peaceful">
          <Peaceful />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Main;
