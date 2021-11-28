import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@firebase/auth';
import { auth } from '@shared/firebase';

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const subscribeOnUserChanged = (setUser: (user: User | null) => void) =>
  auth.onAuthStateChanged(setUser);
