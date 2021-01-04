import {v4 as uuidv4} from 'uuid';

// Add Expense

export const addExpense = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createAt
  }
})

// Remove Expense
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//Edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
