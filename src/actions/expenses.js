import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// Add Expense

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

// Add expense async
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createAt };

    // Add to Database Firebase
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {   // If add database is successful then update store state
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // remove expense in firebase
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
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

// Edit expense async
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    // Update firebase
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    // fetch database firebase
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {

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