import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})
export const startLogin = (providerLogin) => {
  return () => {
    if (providerLogin == 'google'){
      return firebase.auth().signInWithPopup(googleAuthProvider);
    } else if (providerLogin == 'facebook') {
      return firebase.auth().signInWithPopup(facebookAuthProvider);
    } else return null;
  };
};

export const logout = () => ({
  type: 'LOGOUT'
})
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
