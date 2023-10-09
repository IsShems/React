export const selectTotalExpense = (state) => {
    const expenses = state.expenses;
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };
  
