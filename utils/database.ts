// utils/database.ts
import { getDatabase, ref, get, child } from 'firebase/database';
import { db } from '@/firebaseConfig'; 

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

export const getUserFromDb = async (email: string, passwordHash: string): Promise<User | null> => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users`)); 

  if (snapshot.exists()) {
    const users = snapshot.val();
    for (let id in users) {
      if (users[id].email === email && users[id].passwordHash === passwordHash) {
        return { id, ...users[id] };
      }
    }
  }
  
  return null;
};
