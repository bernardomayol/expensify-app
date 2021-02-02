import React, {useState} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

const EditExpensePage = (props) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = (open) => {
    setShowModal(open)
  }

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.startEditExpense(props.expense.id, expense);
            props.history.push('/');
          }}
        />
        <button
          className='button button--secondary'
          onClick={(e) => {
            handleShowModal(true);

              //props.startRemoveExpense({ id: props.expense.id });
              //props.history.push('/');
            }
          }
        >
          Remove expense
        </button>
        <RemoveModal 
        showModal={showModal} 
        handleShowModal={handleShowModal}
        startRemoveExpense={props.startRemoveExpense}
        expense={props.expense}
        history={props.history}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => {
      dispatch(startEditExpense(id, expense));
    },
    startRemoveExpense: (data) => {
      dispatch(startRemoveExpense(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
