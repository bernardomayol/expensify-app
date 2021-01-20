import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {editExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={(expense) => {
        props.editExpense(props.expense.id, expense);
        props.history.push('/');
      }}/>
          <button onClick={(e) => {
      props.startRemoveExpense({id: props.expense.id});
      props.history.push('/');
    }}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
  expense: state.expenses.find((expense) => {
    return expense.id === props.match.params.id
    })
  } 
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => { dispatch(editExpense(id, expense))},
    startRemoveExpense: (data) => { dispatch(startRemoveExpense(data)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);