import authReducer from '../../reducers/auth'

test('should setup login value uid', () => {
  const uid = '12345'
  const actionObj = {
    type: 'LOGIN',
    uid
  }
  const state =  authReducer({}, actionObj)
  expect(state).toEqual({uid})
})

test('should setup logout value empty', () => {
  const uid = '12345'
  const actionObj = {
    type: 'LOGOUT',
  }
  const state =  authReducer({uid}, actionObj)
  expect(state).toEqual({})
})

