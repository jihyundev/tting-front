'use client'

import {useRouter} from "next/navigation";
import {CircleUserRound, Loader2} from "lucide-react";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useUserWithdrawal} from "@/hooks/use-user-withdrawal";
import {Typography} from "@/components/typography";

export const UserMenu = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const {onSignOut} = useLogout();

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [withdrawalContent, setWithdrawalContent] = useState('');
    const {mutate, isPending, isSuccess} = useUserWithdrawal();

    const navigateToLogin = () => {
        router.push('/login')
    }

    const onWithdrawal = () => {
        mutate({
            text: withdrawalContent
        });
        setIsDialogOpen(false);
    }

    if (session?.user) {
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div
                            className="fixed top-3.5 sm:top-8 md:right-8 right-5 z-40"
                        >
                            <Avatar className="size-7 sm:size-10">
                                <AvatarImage src={session.user.image || ''}/>
                                <AvatarFallback>{session.user.name || ''}</AvatarFallback>
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
                        <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>계정 탈퇴</DropdownMenuItem>
                        <DropdownMenuItem onClick={onSignOut}>로그아웃</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={isDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>계정 탈퇴</DialogTitle>
                            <DialogDescription>
                                사용하신 계정 정보와 생성된 아이디어를 모두 삭제합니다. <br />
                                만약 불편한 사항이 있었다면 마지막으로 내용을 남겨주세요.
                            </DialogDescription>
                        </DialogHeader>
                            <div className="w-full">
                                <Input
                                    id="content"
                                    defaultValue=""
                                    maxLength={1000}
                                    onChange={(e) => setWithdrawalContent(e.target.value)}
                                />
                            </div>
                        <Typography variant="caption">
                            남겨주신 내용을 반영하여 더 나은 ‘띵’이 되기 위해 노력하겠습니다. <br/> 그동안 ‘띵’ 서비스를 사용해주셔서 감사합니다.
                        </Typography>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>닫기</Button>
                            <Button type="submit" onClick={onWithdrawal} disabled={isPending}>
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        계정 탈퇴
                                    </>
                                ) : "계정 탈퇴"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
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
