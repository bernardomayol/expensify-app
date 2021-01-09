import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({  // toEqual to compare objects and arrrays, toBe to compare numbers, strings,etc
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'Rent of the month' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates : { note: 'Rent of the month' }
  });
})

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    note: 'This was last months rent',
    amount: 109500,
    createAt: 1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
  }

  });
})

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {    
      description : '', 
      note : '', 
      amount : 0, 
      createAt : 0,
      id: expect.any(String)
    }
  });
})