import React from 'react';
import Categories from '../main/categories/Categories';
import Game from '../main/game/Game';
import Settings from '../main/settings/Settings';
import Timer from '../main/timer/Timer';
import Words from '../main/words/Words';
import { Route, Switch } from 'react-router-dom';
import style from '../main/style.module.css';
import SpyMan from './game/SpyMan';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Settings />
        </Route>
        <Route path="/game">
          <Game />
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
        <Route path="/words">
          <Words />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
