import React, { useReducer } from 'react';
import './App.css';
import { toDoReducer, initialState } from './reducers';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';


function App() {
//Stuff should be here.
//Maybe a state
const [state, dispatch] = useReducer(toDoReducer, initialState);
//Some handlers
//S
const addTodo = item => dispatch({ type: 'ADD_TODO', text: item});
const toggleComplete = id => dispatch({ type: 'TOGGLE_COMPLETE', id: id});
const clearComplete = () => dispatch({ type: 'CLEAR_COMPLETE'});

  return (
    <div className="App">
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
      <TodoForm addTodo={addTodo} clearComplete={clearComplete} />
    </div>
  )
}

export default App;
