import {
  generateSpiesCount,
  getRandomWordByCategory,
} from '../../utils/spiesHelpers';

const initialState = {
  playersCount: 3,
  spiesCount: 1,
  timer: 3,
  selectedCategories: [2],

  started: false, // тру когда кликнут начать игру
  currentWord: null, // текущее слово (выбирается случайно из выбранных катов)
  spiesOrder: null, // номер шпиона (случайное число от 1 до players)
  playersShowed: 0, // сколько человек уже просмотрели свою роль
  wrapper: null, // показывать ли обложку или нет
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/players/set':
      return {
        ...state,
        playersCount: action.payload,
      };
    case 'game/spies/set':
      return {
        ...state,
        spiesCount: action.payload,
      };
    case 'game/time/set':
      return {
        ...state,
        timer: action.payload,
      };
    case 'game/categories/select':
      //проверка выбрана ли категория...
      const isAlreadySelected =
        state.selectedCategories.indexOf(action.payload) !== -1;

      if (isAlreadySelected) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.filter(
            (item) => item !== action.payload,
          ),
        };
      } else {
        return {
          ...state,
          selectedCategories: [...state.selectedCategories, action.payload],
        };
      }
    case 'game/start/set':
      return {
        ...state,
        started: true,
        wrapper: true,
        playersShowed: state.playersShowed + 1,
        spiesOrder: action.payload.spiesOrder,
        currentWord: action.payload.currentWord,
      };
    case 'game/wrapper/set':
      return {
        ...state,
        wrapper: false,
      };

    case 'eee':
      return {
        ...state,
        wrapper: state.playersShowed !== state.playersCount,
        playersShowed: state.playersShowed + 1,
      };

    default:
      return state;
  }
}

export function setHandle() {
  return {
    type: 'eee',
  };
}

export function setPlayers(count) {
  return {
    type: 'game/players/set',
    payload: count,
  };
}

export function setSpies(count) {
  return {
    type: 'game/spies/set',
    payload: count,
  };
}

export function setTime(timeCount) {
  return {
    type: 'game/time/set',
    payload: timeCount,
  };
}

export function selectCategories(category) {
  return {
    type: 'game/categories/select',
    payload: category,
  };
}

export function setStartGame() {
  return (dispatch, getState) => {
    const { playersCount, spiesCount, selectedCategories } = getState().game;
    const { words } = getState().words;
    dispatch({
      type: 'game/start/set',
      payload: {
        spiesOrder: generateSpiesCount(playersCount, spiesCount),
        currentWord: getRandomWordByCategory(words, selectedCategories),
      },
    });
  };
}

export function setWrapperSelected() {
  return {
    type: 'game/wrapper/set',
  };
}
