'use client'

import {useRouter} from "next/navigation";
import {CircleUserRound} from "lucide-react";
import {useSession} from "next-auth/react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useLogout} from "@/hooks/use-logout";

export const UserAvatar = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const {onSignOut} = useLogout();

    const navigateToLogin = () => {
        router.push('/login')
    }

    if (session?.user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div
                        className="fixed top-3.5 sm:top-8 md:right-8 right-5 z-40"
                    >
                        <Avatar className="size-7 sm:size-10">
                            <AvatarImage src={session.user.image}/>
                            <AvatarFallback>{session.user.name}</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    sideOffset={50}
                    alignOffset={32}
                >
                    <DropdownMenuLabel>무엇을 도와드릴까요?</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>프로필 수정</DropdownMenuItem>
                    <DropdownMenuItem>고객 제안</DropdownMenuItem>
                    <DropdownMenuItem>구독 플랜</DropdownMenuItem>
                    <DropdownMenuItem>개발 노트</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>계정 탈퇴</DropdownMenuItem>
                    <DropdownMenuItem onClick={onSignOut}>로그아웃</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
        <button
            className="fixed top-3.5 sm:top-8 md:right-8 right-5 z-40"
            onClick={navigateToLogin}
        >
            <CircleUserRound
                className="size-7"
                color="#2F3133"
            />
        </button>
    )
}
