import User from "@/models/user";
import { connectDB } from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );
        if (!user) {
          throw new Error("No se encontró el usuario");
        }

        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Contraseña incorrecta");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        id: number;
        name: string;
        email: string;
        image: string;
        role: string;
        dni: string;
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
