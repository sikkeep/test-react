import { ref, get, child } from "firebase/database";
import { db } from "@/firebaseConfig";

export const getUserFromFirebase = async (email: string, password: string) => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `users/${email.replace('.', '%2E')}`));
  if (snapshot.exists()) {
    const user = snapshot.val();
    if (user.password === password) {
      return user;
    }
  }
  return null;
};
