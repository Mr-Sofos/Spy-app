const initialState = {
  items: [
    {
      id: 1,
      name: 'Города'
    },
    {
      id: 2,
      name: 'Столицы'
    },
    {
      id: 3,
      name: 'Моря'
    },
    {
      id: 4,
      name: 'Космос'
    },
    {
      id: 5,
      name: 'Транспорт'
    },
    {
      id: 6,
      name: 'Животные'
    },
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
