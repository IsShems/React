import React, { useState } from 'react';

const ExpenseForm = ({ onAdd }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    onAdd({ category, amount, id: Math.random() });
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
