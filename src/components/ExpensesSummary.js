import React from 'react';
import {Link} from 'react-router-dom'
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import expenses from '../tests/fixtures/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div className='page-header'>
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling : <span>{formattedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
