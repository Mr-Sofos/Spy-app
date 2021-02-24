import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import game from './reducer/game';
import categories from './reducer/categories';
import words from './reducer/words';

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
