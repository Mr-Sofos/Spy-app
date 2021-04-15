import React from 'react';
import Categories from './Сategories';
import { Route, Switch, Redirect } from 'react-router-dom';
import style from './/style.module.css';
import SpyMan from './Game/GameComponents/SpyMan';
import Game from './Game';
import Settings from './Settings';
import Timer from './Timer';
import Words from './Words';
import { useSelector } from 'react-redux';
import Peaceful from './Game/GameComponents/Peaceful';

function Main() {
  const started = useSelector((state) => state.game.started);

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
