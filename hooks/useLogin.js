import { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('Invalid Username/password');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Invalid Username/password');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    });
  };

  return { loginUser, errorMessage };
};
