import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { redirect } from "next/dist/server/api-utils"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return '/'
        }
    },
    secret: process.env.SECRET
})