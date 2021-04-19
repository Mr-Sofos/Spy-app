import {
  generateSpiesCount,
  getRandomWordByCategories,
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
    case 'game/set-players': {
      return {
        ...state,
        playersCount: action.payload,
      };
    }
    case 'game/set-spies': {
      return {
        ...state,
        spiesCount: action.payload,
      };
    }
    case 'game/set-time': {
      return {
        ...state,
        timer: action.payload,
      };
    }
    case 'game/categories/select': {
      // проверка выбрана ли категория...
      const isAlreadySelected =
        state.selectedCategories.indexOf(action.payload) !== -1;

      if (isAlreadySelected) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.filter(
            (item) => item !== action.payload,
          ),
        };
      }
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.payload],
      };
    }
    case 'game/set-start': {
      return {
        ...state,
        started: true,
        wrapper: true,
        playersShowed: state.playersShowed + 1,
        spiesOrder: action.payload.spiesOrder,
        currentWord: action.payload.currentWord,
      };
    }

    case 'game/start/again': {
      return {
        ...state,
        started: false,
        playersShowed: 0,
      };
    }

    case 'game/wrapper': {
      return {
        ...state,
        wrapper: false,
      };
    }

    case 'view/roles': {
      return {
        ...state,
        wrapper: state.playersShowed !== state.playersCount,
        playersShowed: state.playersShowed + 1,
      };
    }

    default: {
      return state;
    }
  }
}

export function handleViewRoles() {
  return {
    type: 'view/roles',
  };
}

export function setPlayers(count) {
  return {
    type: 'game/set-players',
    payload: count,
  };
}

export function setSpies(count) {
  return {
    type: 'game/set-spies',
    payload: count,
  };
}

export function setTime(timeCount) {
  return {
    type: 'game/set-time',
    payload: timeCount,
  };
}

export function selectCategories(category) {
  return {
    type: 'game/categories/select',
    payload: category,
  };
}

export function setWrapperSelected() {
  return {
    type: 'game/wrapper',
  };
}

export function startGameAgain() {
  return {
    type: 'game/start/again',
  };
}

export function startGame() {
  return (dispatch, getState) => {
    const { playersCount, spiesCount, selectedCategories } = getState().game;
    const { words } = getState().words;
    dispatch({
      type: 'game/set-start',
      payload: {
        spiesOrder: generateSpiesCount(playersCount, spiesCount),
        currentWord: getRandomWordByCategories(words, selectedCategories),
      },
    });
  };
}

// селектор
export const selectedCategoriesSelector = (state) => {
  const { selectedCategories } = state.game;

  if (selectedCategories.length === state.categories.length) {
    return 'все';
  }

  return state.categories.items
    .reduce((showSelectedCategories, category) => {
      if (selectedCategories.indexOf(category.id) !== -1) {
        return [...showSelectedCategories, category.name];
      }

      return showSelectedCategories;
    }, [])
    .join(', ');
};
