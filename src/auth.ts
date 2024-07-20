import NextAuth from "next-auth"
import Kakao from "next-auth/providers/kakao"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Kakao],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            const { name, email, image } = user;
            const { provider, access_token, refresh_token } = account;

            console.log(`signIn called successfully... attempting to login with API server.`)
            return true;

            // TODO: 로그인 API 나오면 연동
            // const response = await fetch('http://localhost:8000/auth/login', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         name,
            //         email,
            //         image,
            //     }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });
            //
            // return response.ok;
        }
    }
})
