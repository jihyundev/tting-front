import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postGeneratedIdea} from "@/services/idea";
import type {IdeaCreationItem} from "@/types/idea-create";

export const useGeneratedIdeaAdd = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['addGeneratedIdea'],
        mutationFn: (item: IdeaCreationItem) => postGeneratedIdea(item),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['getIdeas']
        })
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
