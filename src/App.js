import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const storeTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  useEffect(() => {
    storeTodos(todos);
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (task) => {
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <h1> #TODO APP </h1>
    <Header filter={filter} setFilter={setFilter} />
    {filter === 'all' && <AddTask addTask={addTask} />}
    <TodoList
      todos={todos}
      filter={filter}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      deleteAllCompleted={deleteAllCompleted}
    />
  </div>
  );
}

export default App;