import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/lib/firebase';

const authOptions: AuthOptions = {
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials): Promise<any> => {
        console.log('Credentials:', credentials);

        return;
        // try {
        //   if (!credentials || !credentials.email || !credentials.password) {
        //     throw new Error('Missing email or password');
        //   }

        //   const userCredential = await signInWithEmailAndPassword(
        //     auth,
        //     (credentials as any).email || '',
        //     (credentials as any).password || '',
        //   );

        //   if (userCredential.user) {
        //     return {
        //       id: userCredential.user.uid,
        //       email: userCredential.user.email,
        //     };
        //   } else {
        //     throw new Error('No user found');
        //   }
        // } catch (error) {
        //   console.error('Error in authorize:', error);
        //   return null;
        // }
      },
    }),
  ],
  debug: true,
};

export default authOptions;
