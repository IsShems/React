import React from 'react';

const TaskFilters = ({ filter, onFilterChange }) => {
  return (
    <div>
      <button onClick={() => onFilterChange('all')} disabled={filter === 'all'}>
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        disabled={filter === 'active'}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        disabled={filter === 'completed'}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilters;
