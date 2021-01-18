import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// Add Expense

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

// Add expense async
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createAt };

    // Update Database Firebase
    return database
      .ref('expenses')
      .push(expense)
      .then((ref) => {   // If update database is successful then update store state
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//Edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
