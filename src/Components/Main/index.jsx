import React from 'react';
import Categories from './Сategories';
import { Route, Switch } from 'react-router-dom';
import style from './/style.module.css';
import SpyMan from './Game/SpyMan';
import Game from './Game';
import Settings from './Settings';
import Timer from './Timer';
import Words from './Words';

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
        <Route path="/words/:id">
          <Words />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
