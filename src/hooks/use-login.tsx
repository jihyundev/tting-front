import {signIn} from "next-auth/react";

export const useLogin = () => {
    const onSignIn = async () => {
        await signIn('kakao', {
            redirect: true,
            callbackUrl: '/',
        });
    };

    return {
        onSignIn,
    };
}
