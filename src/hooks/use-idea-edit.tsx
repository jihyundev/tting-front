import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postIdea} from "@/services/idea";

export const useIdeaEdit = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['editIdea'],
        mutationFn: ({id, content}: {
            id: string;
            content: string;
        }) => postIdea({id, content}),
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
