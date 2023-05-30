// src/components/Header.js
import React from 'react';

function Header({ filter, setFilter }) {
  return (
    <header>
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
        All
      </button>
      <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>
        Active
      </button>
      <button onClick={() => setFilter('complete')} className={filter === 'complete' ? 'active' : ''}>
        Complete
      </button>
    </header>
  );
}

export default Header;