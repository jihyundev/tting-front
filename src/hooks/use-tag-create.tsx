import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postTag} from "@/services/tag";
import {TagColors} from "@/types/tag-colors";

export const useTagCreate = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['createTag'],
        mutationFn: ({name, color}: {
            name: string;
            color: TagColors;
        }) => postTag({name, color}),
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
    }
}
