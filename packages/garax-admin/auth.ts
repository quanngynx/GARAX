import { handleUnauthorizedError } from "@/middlewares/handleUnauthorizedError";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // get data from form's login
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials: Record<"email" | "password", string>) => {
                let user = null

                // call server
                // ...
                // ===========

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    // handleUnauthorizedError();
                    throw new Error("Invalid credentials.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
    theme: { logo: "https://authjs.dev/img/logo-sm.png" },
    session: { strategy: "jwt" },
})