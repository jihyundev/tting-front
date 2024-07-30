import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postGenerateIdea} from "@/services/idea";

export const useIdeaGenerate = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['generateIdeas'],
        mutationFn: ({baseInput, instruction}: {
            baseInput: string;
            instruction: string;
        }) => postGenerateIdea(baseInput, instruction),
        onSuccess: (data) => {
            const updatedData = data.data.map(item => ({ ...item, isChecked: false }));
            queryClient.setQueryData(['generateIdeas'], { ...data, data: updatedData });
        }
    });

    const { mutate, isPending, isError, isSuccess, data, error } = mutation;

    const reset = () => mutation.reset();

    return {
        mutate,
        isPending,
        isError,
        isSuccess,
        data,
        error,
        reset
    };
}
