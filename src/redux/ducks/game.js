const initialState = {
  players: 3,
  spies: 1,
  timer: 3,
  selectedCategories: [2, 3],

  started: false, //true
  currentWord: null, // театр
  spyOrder: null, // номер шпиона (2)
  playersShowed: 0,

  timerStarted: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/players/set':
      return {
        ...state,
        players: action.payload,
      };
    case 'game/spies/set':
      return {
        ...state,
        spies: action.payload,
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
      };

    default:
      return state;
  }
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
  return {
    type: 'game/start/set',
  };
}