import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      accessToken?: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends UserGQL {
    id: string;
    accessToken?: string;
  }
}
