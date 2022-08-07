import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
  const logoutUser = () => {
    signOut(auth).catch((err) => {
      console.log(err.message);
    });
  };

  return { logoutUser };
};
