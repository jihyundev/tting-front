'use client'

import {useRouter} from "next/navigation";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Typography} from "@/components/typography";

export const IntroCard = () => {
    const router = useRouter()
    const navigateToLogin = () => {
        router.push('/idea/create')
    }

    return (
        <Card>
            <CardTitle className="pt-8 text-center mb-4">
                <Typography variant={"header3"}>
                    지금 바로 첫 번째 아이디어를 만들어보세요!
                </Typography>
            </CardTitle>
            <CardContent className="text-center mb-1">
                <Typography variant={'subtitle3'}>
                    왼쪽 ‘만들기’ 탭을 누르거나 아래 버튼을 눌러 아이디어를 만들 수 있어요 :)
                </Typography>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={navigateToLogin}>아이디어 만들기</Button>
            </CardFooter>
        </Card>
    )
}
