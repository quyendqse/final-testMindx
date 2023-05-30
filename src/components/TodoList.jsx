import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, filter, toggleTodo, deleteTodo, deleteAllCompleted }) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'complete') return todo.completed;
    return false;
  });
  

  const handleDeleteAllCompleted = () => {
    deleteAllCompleted();
  };

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {filter === 'complete' && (
        <button 
          style={{backgroundColor:'red'}}
          className="delete-all-completed-btn"
          onClick={handleDeleteAllCompleted}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default TodoList;