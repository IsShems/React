import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, deleteExpense } from './actions';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilters from './components/ExpenseFilters';
import { selectTotalExpense } from './selectors';

function App() {
  const expenses = useSelector((state) => state.expenses);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dispatch = useDispatch();

  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const filteredExpenses = expenses.filter((expense) => {
    if (selectedCategory === 'all') {
      return true;
    }
    return expense.category === selectedCategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const totalExpense = useSelector(selectTotalExpense);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={(expense) => dispatch(addExpense(expense))} />
      <ExpenseFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(expenseId) => dispatch(deleteExpense(expenseId))}
      />
       <div>Total Expense: ${totalExpense.toFixed(2)}</div> {}
    </div>
  );
}

export default App;
