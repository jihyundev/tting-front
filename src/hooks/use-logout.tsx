import { signOut } from "next-auth/react";

export const useLogout = () => {
    const onSignOut = async () => {
        await signOut({ redirect: false });
    };

    return {
        onSignOut,
    };
}
