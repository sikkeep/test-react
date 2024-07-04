import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserFromFirebase } from "@/utils/firebaseSetup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials):Promise<any> => {
        console.log(credentials);
        const user = await signInWithEmailAndPassword(auth, credentials.email as string, credentials.password as string);
        console.log(user);
        if (user) {
          return user;
        } else {
            return null;
        }
      },
    }),
  ],
  debug: true
};

export default NextAuth(authOptions);
