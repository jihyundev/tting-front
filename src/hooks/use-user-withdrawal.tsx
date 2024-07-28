import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteUser} from "@/services/user";

export const useUserWithdrawal = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['deleteUser'],
        mutationFn: ({ text }: {
            text: string;
        }) => deleteUser({ text }),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['getMe']
        })
    })

    return {
        mutate,
        isPending,
        isError,
        isSuccess
    }
}
