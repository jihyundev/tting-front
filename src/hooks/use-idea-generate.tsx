import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postGenerateIdea} from "@/services/idea";

export const useIdeaGenerate = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['generateIdeas'],
        mutationFn: ({baseInput, instruction}: {
            baseInput: string;
            instruction: string;
        }) => postGenerateIdea(baseInput, instruction),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['getIdeas']
        }),
        retry: 1
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
