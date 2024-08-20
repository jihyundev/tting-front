import {useState} from "react";
import {useUserWithdrawal} from "@/hooks/use-user-withdrawal";
import {useLogout} from "@/hooks/use-logout";

export const useWithdrawDialog = () => {
    const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
    const [withdrawalContent, setWithdrawalContent] = useState('');
    const {mutate, isPending, isSuccess} = useUserWithdrawal();

    const {onSignOut} = useLogout();

    const onWithdrawal = () => {
        mutate({
            text: withdrawalContent
        }, {
            onSuccess: () => {
                onSignOut();
                setIsWithdrawDialogOpen(false);
            }
        });
    }

    return {
        isWithdrawDialogOpen,
        setIsWithdrawDialogOpen,
        setWithdrawalContent,
        onWithdrawal,
        isPending,
        isSuccess
    }
}
