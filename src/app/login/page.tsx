import {Logo} from "@/components/icons";
import {Typography} from "@/components/typography";
import {KakaoLoginButton} from "@/components/kakao-login-button";

export default function LoginPage() {
    return (
        <>
            <div className="w-full flex gap-1 justify-center mb-5">
                <Logo className="h-10 w-10" />
                <Typography variant="header2">
                    시작하기
                </Typography>
            </div>
            <div className="w-full text-center mb-5">
                <Typography variant="subtitle3">나만의 창의적인 아이디어를 만들기 위해서는 <br /> 로그인이 필요해요.</Typography>
            </div>
            <div className="w-full flex justify-center">
                <KakaoLoginButton />
            </div>
        </>
    )
}
