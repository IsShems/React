import React from 'react';

const ExpenseFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <select onChange={(e) => onSelectCategory(e.target.value)} value={selectedCategory}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilters;
