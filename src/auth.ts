import NextAuth from "next-auth"
import Kakao from "next-auth/providers/kakao"
import { postSocialLogin } from "@/services/user";
import { cookies } from "next/headers";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Kakao],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            // const { name, email, image } = user;
            if (account && account.access_token) {
                const { provider, access_token, refresh_token } = account;
                const response = await postSocialLogin(provider, access_token)
                const { data } = response
                cookies().set({
                    name: 'accessToken',
                    value: data.accessToken,
                    maxAge: 7 * 24 * 60 * 60,
                })
                cookies().set({
                    name: 'refreshToken',
                    value: data.refreshToken,
                    maxAge: 7 * 24 * 60 * 60,
                })
                return true
            }
            return false;
        }
    }
})
