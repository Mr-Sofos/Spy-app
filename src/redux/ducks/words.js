const initialState = {
  words: [
    {
      id: 1,
      name: 'Лес'
    },
    {
      id: 2,
      name: 'Озеро'
    },
    {
      id: 3,
      name: 'Кит'
    },
    {
      id: 4,
      name: 'Акула'
    },
    {
      id: 5,
      name: 'Дом'
    },
    {
      id: 6,
      name: 'Аэропорт'
    },
    {
      id: 7,
      name: 'Бар'
    },
    {
      id: 8,
      name: 'Кинотеатр'
    },
    {
      id: 9,
      name: 'Цирк'
    },
    {
      id: 10,
      name: 'Концертный зал'
    },
    {
      id: 11,
      name: 'Стройка'
    },
    {
      id: 12,
      name: 'Галлерея'
    },
    {
      id: 13,
      name: 'Гараж'
    },
    {
      id: 14,
      name: 'Больница'
    }
  ]
};

const words = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default words;
