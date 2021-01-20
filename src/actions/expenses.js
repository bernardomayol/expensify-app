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

// Remove Expense async
export const startRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    // remove expense in firebase
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}

//Edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    // fetch database firebase
    return database.ref('expenses').once('value').then((snapshot) => {

      // Parse the data received to update state
      const expensesData = []
      snapshot.forEach((childSnapshot) => {
        expensesData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setExpenses(expensesData))
    });
  }
};