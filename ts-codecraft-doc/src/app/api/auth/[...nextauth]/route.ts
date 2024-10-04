import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

// Define the path to the JSON file
const userDbPath = path.join(process.cwd(), 'db', 'user.json');

// Function to read user data from JSON file
const getUsersFromJson = () => {
  const data = fs.readFileSync(userDbPath, 'utf8');
  return JSON.parse(data);
};

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Read users from JSON file
        const users = getUsersFromJson();
        const user = users.find((u: any) => u.email === credentials.email);

        // Check if user exists and the password matches
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id.toString(), name: user.name, email: user.email };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
