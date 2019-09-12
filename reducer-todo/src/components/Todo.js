import React from 'react';

const Todo = ({ id, toggleComplete, item, completed }) => {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none'}} onClick={() => toggleComplete(id)}>
    {item}
    </li>
  )
}
export default Todo;
