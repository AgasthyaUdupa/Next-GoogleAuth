import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google') {
                const { name, email } = user
                try {
                    await connectMongoDB()
                    const userEmail = await User.findOne({ email })
                    if (!userEmail) {
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: 'POSt',
                            headers: {
                                "Content-Type": 'application/json',
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            })
                        })
                        if (res.ok) {
                            return User
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            return user
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
