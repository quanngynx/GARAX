import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // get data from form's login
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;

                console.log(">> Check credentials::", credentials);

                // call server
                // ...
                user = {
                    _id: '123',
                    username: '123',
                    email: '123',
                    isVerify: '123',
                    type: '123',
                    role: '123',
                };
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
    pages: {
        signIn: '/auth/login',
        // signOut: ''
    },
    theme: { logo: "https://authjs.dev/img/logo-sm.png" },
    // session: { strategy: "jwt" },
}

export const {
    auth,
    signIn,
    signOut,
} = NextAuth(authOptions);