import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import game from './ducks/game';
import categories from './ducks/categories';
import words from './ducks/words';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  game,
  categories,
  words,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
