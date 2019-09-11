export const initialState = {

    todos: [ 
        {
        item: 'Learn about reducers',
        completed: false,
        id: 0
      },

      {
        item: 'Learn about Context API',
        completed: false,
        id: 1
      },

      {
        item: 'Learn about Redux',
        completed: false,
        id: 2
      },
    ]
};

export const reducer = (state, action) => {
    return state;
  }
  