'use client'

import {useRouter} from "next/navigation";
import {CircleUserRound} from "lucide-react";

export const UserAvatar = () => {
    const router = useRouter()
    const navigateToLogin = () => {
        router.push('/login')
    }

    return (
        <button
            className="fixed top-3.5 right-5 z-40 sm:top-8 md:right-8"
            onClick={navigateToLogin}
        >
            <CircleUserRound className="w-7 h-7" />
        </button>
    )
}
