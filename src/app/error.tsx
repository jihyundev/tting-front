'use client'

import { useEffect } from 'react'
import Image from "next/image";
import {Typography} from "@/components/typography";
import {Button} from "@/components/ui/button";

export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="w-full h-full flex justify-center align-center gap-8">
            <Image
                src="/brand/error-logo.svg"
                alt="error-logo"
                width={280}
                height={200}
            />
            <div className="h-full flex flex-col justify-center align-center gap-6">
                <Typography variant="header1">알 수 없는 에러가 발생했어요.</Typography>
                <Typography variant="subtitle3">잠시 후에 다시 시도해주세요.</Typography>
                <Button onClick={() => reset()}>다시 시도해보기</Button>
            </div>
        </div>
    )
}
