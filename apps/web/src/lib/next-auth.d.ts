import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { Role } from '@/types';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  walletAddress: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

declare module 'next-auth' {
  interface Session {
    user: User;
    tokens: Tokens;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
    tokens: Tokens;
  }
}
