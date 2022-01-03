import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const config = {
  apiKey: 'AIzaSyBcDQL5euuXp6wcXTORprH__PZzeb7aRMo',
  authDomain: 'strong-eon-246706.firebaseapp.com',
  projectId: 'strong-eon-246706',
  storageBucket: 'strong-eon-246706.appspot.com',
  messagingSenderId: '954403703705',
  appId: '1:954403703705:web:2f6dce0705bbdaf111a108',
};

const app = initializeApp(config);

export const auth = getAuth(app);
