'use client'

import {Button} from "@/components/ui/button";
import {useLogout} from "@/hooks/use-logout";

export const LogoutButton = () => {
    const { onSignOut } = useLogout();

    return (
        <Button onClick={onSignOut}>로그아웃</Button>
    )
}
