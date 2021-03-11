const initialState = {
  players: 3,
  spies: 1,
  categories: [],
  timer: 3
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'game/players/set':
      return {
        ...state,
        players: action.payload
      }
    case 'game/spies/set':
      return {
        ...state,
        spies: action.payload
      }
    case 'game/time/set':
      return {
        ...state,
        timer: action.payload
      }

    default:
      return state;
  }
};

export function setPlayers(count) {
  return {
    type: 'game/players/set',
    payload: count
  }
}

export function setSpies(count) {
  return {
    type: 'game/spies/set',
    payload: count
  }
}

export function setTime(timeCount) {
  return {
    type: 'game/time/set',
    payload: timeCount
  }
}
