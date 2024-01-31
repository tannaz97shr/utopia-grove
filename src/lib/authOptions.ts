import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail } from "./auth";
import { verifyPassword } from "./authActions";

export const authOptions: NextAuthOptions = {
  // session: {
  jwt: {},
  // },
  providers: [
    CredentialsProvider({
      async authorize(credentials: any, _req) {
        const [user] = await findUserByEmail(credentials.email);
        if (!user) {
          throw new Error("No user found");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Could not log you in");
        }
        return { id: "1", email: user.email };
      },
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
    }),
  ],
};
