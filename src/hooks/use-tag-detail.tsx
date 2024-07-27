import {useQuery} from "@tanstack/react-query";
import {getTag} from "@/services/tag";

export const useTagDetail = ({
    tagId = ''
}) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getTag', tagId],
        queryFn: () => getTag(tagId)
    });

    return {
        data,
        isLoading,
        isError
    }
}
