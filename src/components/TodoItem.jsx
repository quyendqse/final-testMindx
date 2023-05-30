import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="toggle"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <label>{todo.text}</label>
      <button style={{marginLeft:'20px', backgroundColor:'red'}} className="delete-btn" onClick={handleDelete}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;