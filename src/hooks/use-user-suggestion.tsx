import {useMutation} from "@tanstack/react-query";
import {postSuggestion} from "@/services/user";

export const useUserSuggestion = () => {
    const {mutate, isPending, isSuccess, isError} = useMutation({
        mutationKey: ['postSuggestion'],
        mutationFn: ({title, content}: {
            title: string;
            content: string;
        }) => postSuggestion({title, content})
    });

    return {
        mutate,
        isPending,
        isSuccess,
        isError
    }
}
