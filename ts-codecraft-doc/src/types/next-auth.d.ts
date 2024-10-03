import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string; // Add your custom property
      name: string;
      email: string;
      image?: string | null;
    } & DefaultSession['user']; // Extend with default properties
  }
}
