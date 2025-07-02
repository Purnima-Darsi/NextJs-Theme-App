import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === 'admin@example.com' && credentials.password === 'password') {
          return { id: '1', name: 'Admin', email: credentials.email };
        }
        return null;
      }
    })
  ]
} satisfies NextAuthConfig;
