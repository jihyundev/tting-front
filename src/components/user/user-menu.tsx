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
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button";
import {Typography} from "@/components/typography";
import {Label} from "@/components/ui/label";
import {useWithdrawDialog} from "@/hooks/use-withdraw-dialog";
import {useSuggestionDialog} from "@/hooks/use-suggestion-dialog";

export const UserMenu = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const {onSignOut} = useLogout();

    const { isWithdrawDialogOpen, setIsWithdrawDialogOpen, setWithdrawalContent, onWithdrawal, isPending } = useWithdrawDialog();
    const { isSuggestionDialogOpen, setIsSuggestionDialogOpen, setSuggestionTitle, setSuggestionContent, onSuggestion, isSuggestionPending } = useSuggestionDialog();

    const navigateToLogin = () => {
        router.push('/login')
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
                        <DropdownMenuItem onClick={() => setIsSuggestionDialogOpen(true)}>고객 제안</DropdownMenuItem>
                        <DropdownMenuItem>구독 플랜</DropdownMenuItem>
                        <DropdownMenuItem>개발 노트</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setIsWithdrawDialogOpen(true)}>계정 탈퇴</DropdownMenuItem>
                        <DropdownMenuItem onClick={onSignOut}>로그아웃</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
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
                            <Button type="button" variant="outline" onClick={() => setIsWithdrawDialogOpen(false)}>닫기</Button>
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
                <Dialog open={isSuggestionDialogOpen} onOpenChange={setIsSuggestionDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>고객 제안</DialogTitle>
                            <DialogDescription>
                                서비스 개선이 필요한 사항이나 아이디어가 있다면 보내주세요.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-8 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    제목
                                </Label>
                                <Input
                                    id="name"
                                    className="col-span-7"
                                    onChange={(e) => setSuggestionTitle(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-8 items-center gap-4">
                                <Label htmlFor="content" className="text-right">
                                    내용
                                </Label>
                                <Textarea
                                    id="content"
                                    className="col-span-7"
                                    onChange={(e) => setSuggestionContent(e.target.value)}
                                    />

                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsSuggestionDialogOpen(false)}>닫기</Button>
                            <Button type="submit" onClick={onSuggestion} disabled={isSuggestionPending}>
                                {isSuggestionPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        제안하기
                                    </>
                                ) : "제안하기"}
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
