import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, toggleComplete }) => {
    return (
      <ul>
          {todos.map(todo => (
              <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
          ))}
      </ul>
    )
}

export default TodoList;
