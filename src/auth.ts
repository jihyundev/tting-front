import NextAuth from "next-auth"
import Kakao from "next-auth/providers/kakao"
import { postSocialLogin } from "@/services/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Kakao],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            const { name, email, image } = user;
            if (account && account.access_token) {
                const { provider, access_token, refresh_token } = account;
                console.log(`provider: ${provider}`)
                console.log(`access_token: ${access_token}`)
                console.log(`refresh_token: ${refresh_token}`)

                // TODO: 로그인 API 연동
                postSocialLogin(provider, access_token)
                    .then((response) => {
                        console.log(`api response ---`)
                        console.log(response)
                    })
                    .catch((error) => {
                        console.error(`api error ---`)
                        console.error(error)
                    })
                return true
            }

            console.log(`signIn called successfully... attempting to login with API server.`)
            return true;
        }
    }
})
