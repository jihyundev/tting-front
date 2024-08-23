import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postIdeaAdd} from "@/services/idea";
import type {TagItem} from "@/types/idea-create";

export const useIdeaAdd = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['addIdea'],
        mutationFn: ({content, tags, proposalId}: {
            content: string;
            tags: TagItem[];
            proposalId: string | null;
        }) => postIdeaAdd({content, tags, proposalId}),
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
};
