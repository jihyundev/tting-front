import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postIdea} from "@/services/idea";
import {TagItem} from "@/types/idea-create";

export const useIdeaEdit = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['editIdea'],
        mutationFn: ({id, content, tags}: {
            id: string;
            content: string;
            tags: TagItem[];
        }) => postIdea({id, content, tags}),
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
