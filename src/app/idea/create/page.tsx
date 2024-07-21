import {Typography} from "@/components/typography";

export default function CreatePage() {
    return (
        <>
            <header className="w-full sticky top-0 flex justify-center items-center text-center">
                <Typography variant="subtitle1">다양한 결과물을 만들어보세요</Typography>
            </header>
            <div className="flex justify-center m-12 bg-white">
                <div className="w-full h-full bg-grey-300">
                    <div className="bg-yellow-200">입력</div>
                    <div className="bg-red-200">요청사항</div>
                </div>
                <div className="w-full h-full bg-cyan-200">출력</div>
            </div>
        </>
    )
}
