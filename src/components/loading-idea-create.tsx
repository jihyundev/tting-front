import {LoadingAnimation} from "@/components/loading-animation";
import {Typography} from "@/components/typography";

export const LoadingIdeaCreate = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-48 h-36">
                <LoadingAnimation />
            </div>
            <div className="text-center">
                <Typography variant="subtitle2">
                    잠시만 기다려주세요!<br/>
                    지금 다른 페이지로 이동하시면<br/>
                    진행 중인 작업이 사라져요 😢
                </Typography>
            </div>
        </div>
    )
}
