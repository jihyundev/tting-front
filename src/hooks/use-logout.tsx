import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";

export const useLogout = () => {
    const onSignOut = async () => {
        await signOut({ redirect: false });
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
    };

    return {
        onSignOut,
    };
}
