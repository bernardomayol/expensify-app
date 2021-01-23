import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const uid = '12345';
  const actionObj = login(uid);
  expect(actionObj).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should setup logout action object', () => {
  const actionObj = logout();
  expect(actionObj).toEqual({
    type: 'LOGOUT',
  });
});
