import {useMutation} from "@tanstack/react-query";
import {postIdeas} from "@/services/idea";

export const useIdeasCombine = () => {
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['combineIdeas'],
        mutationFn: ({text}: {
            text: string;
        }) => postIdeas({text}),
    });

    return {
        mutate,
        isPending,
        isError,
        isSuccess,
        data,
        error
    };
}
