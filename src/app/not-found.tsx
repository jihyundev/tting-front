import Link from 'next/link'
import Image from "next/image";
import {Typography} from "@/components/typography";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="w-full h-full flex justify-center align-center gap-8">
            <Image
                src="/brand/error-logo.svg"
                alt="error-logo"
                width={280}
                height={200}
            />
            <div className="h-full flex flex-col justify-center align-center gap-6">
                <Typography variant="header1">띠용? 이 페이지는 없는 것 같아요!</Typography>
                <Typography variant="subtitle3">요청하신 페이지가 사라졌거나 잘못된 주소를 입력하셨습니다. <br/>
                    홈으로 이동해 주세요 :)</Typography>
                <Link href="/">
                    <Button>홈으로 이동</Button>
                </Link>
            </div>
        </div>
    )
}
