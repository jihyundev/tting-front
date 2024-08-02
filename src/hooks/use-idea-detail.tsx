import {useQuery} from "@tanstack/react-query";
import {getIdea} from "@/services/idea";

export const useIdeaDetail = ({
    ideaId = ''
}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getIdea', ideaId],
        queryFn: () => getIdea(ideaId)
    });

    return {
        data,
        isLoading,
        isError
    }
}
