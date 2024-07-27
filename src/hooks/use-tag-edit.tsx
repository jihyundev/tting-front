import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postTagUpdate} from "@/services/tag";
import {TagColors} from "@/types/tag-colors";

export const useTagEdit = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['editTag'],
        mutationFn: ({tagId, name, color}: {
            tagId: string;
            name: string;
            color: TagColors;
        }) => postTagUpdate({tagId, name, color}),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['getTags']
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
