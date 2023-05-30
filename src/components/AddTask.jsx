// src/components/AddTask.js
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task" 
        style={{width:'80%',height:'30px'}} 
      />
      <button style={{marginLeft:'20px'}} type="submit">Add</button>
    </form>
  );
}

export default AddTask;