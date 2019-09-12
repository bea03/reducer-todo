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
      }
    ]
};

export function toDoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state, todos: [
            ...state.todos, {item: action.text, id:Date.now(), completed: false }
          ]
        }

      case 'TOGGLE_COMPLETE':
          return {
            ...state, todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed } : todo)
          }
      case 'CLEAR_COMPLETE':
          return {
            ...state, todos: state.todos.filter(todo => !todo.completed)
          }

      default:
        return state;
    }
  }
