const selectExpensesTotal = (expenses) => {
  return expenses.map((expense) => expense.amount).reduce((total, amount) => total + amount, 0);
}

export default selectExpensesTotal;