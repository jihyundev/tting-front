'use client'

import {KakaoLogo} from "@/components/icons";
import {Typography} from "@/components/typography";
import {useLogin} from "@/hooks/use-login";

export const KakaoLoginButton = () => {
    const { onSignIn } = useLogin();
    return (
        <button
            onClick={onSignIn}
            className="flex items-center justify-center gap-2 h-11 bg-[#FEE500] rounded-md px-7"
        >
            <KakaoLogo />
            <Typography variant="button1" className="text-black">
                카카오계정으로 로그인
            </Typography>
        </button>
    )
}
