const initialState = {
  items: [
    {
      id: 1,
      name: 'Город'
    },
    {
      id: 2,
      name: 'Столица'
    }
  ]
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categories;
