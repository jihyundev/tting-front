import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postTagUpdate} from "@/services/tag";
import {TagColors} from "@/types/tag-colors";
import {ErrorResponse} from "@/types/error-response";

export const useTagEdit = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
        mutationKey: ['editTag'],
        mutationFn: ({tagId, name, color}: {
            tagId: string;
            name: string;
            color: TagColors;
        }) => postTagUpdate({tagId, name, color}),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['getTags'] });
            queryClient.invalidateQueries({ queryKey: ['getTag', variables.tagId] });
        }
    });

    const errorMessage = (error as ErrorResponse)?.response?.data?.message || error?.message;

    return {
        mutate,
        isPending,
        isError,
        isSuccess,
        data,
        error,
        errorMessage
    };
}
