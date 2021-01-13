import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import expenses from '../tests/fixtures/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling : {formattedTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expensesFiltered = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expensesFiltered.length,
    expensesTotal: selectExpensesTotal(expensesFiltered),
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
