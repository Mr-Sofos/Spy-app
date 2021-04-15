const initialState = {
  words: [
    {
      id: 1,
      name: 'Греция',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Планетарий',
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Скейтборд',
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Пиццерия',
      categoryId: 4,
    },
    {
      id: 5,
      name: 'Река',
      categoryId: 5,
    },
    {
      id: 6,
      name: 'Древний рим',
      categoryId: 6,
    },
    {
      id: 7,
      name: 'Поле для гольфа',
      categoryId: 7,
    },
    {
      id: 8,
      name: 'Шоколадная фабрика',
      categoryId: 8,
    },
    {
      id: 9,
      name: 'Цирк',
      categoryId: 8,
    },
    {
      id: 10,
      name: 'Концертный зал',
      categoryId: 8,
    },
    {
      id: 11,
      name: 'Стройка',
      categoryId: 8,
    },
    {
      id: 12,
      name: 'Галлерея',
      categoryId: 8,
    },
    {
      id: 13,
      name: 'Гараж',
      categoryId: 8,
    },
    {
      id: 14,
      name: 'Больница',
      categoryId: 8,
    },
  ],
};

const words = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default words;
