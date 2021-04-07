const initialState = {
  items: [
    {
      id: 1,
      name: 'Страны'
    },
    {
      id: 2,
      name: 'Исскуство и культура'
    },
    {
      id: 3,
      name: 'Путешествие'
    },
    {
      id: 4,
      name: 'Дети'
    },
    {
      id: 5,
      name: 'Досуг'
    },
    {
      id: 6,
      name: 'Машина времени'
    },
    {
      id: 7,
      name: 'Хардкорный микс'
    },
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
