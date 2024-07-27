import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteIdea} from "@/services/idea";

export const useIdeasDelete = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['deleteIdea'],
        mutationFn: async (ids: string[]) => {
            for (const id of ids) {
                await deleteIdea(id);
            }
        },
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
