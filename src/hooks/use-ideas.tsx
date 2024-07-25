import {useQuery} from "@tanstack/react-query";
import {getIdeas} from "@/services/idea";
import type {IdeaSearchQuery} from "@/types/idea-fetch";

export const useIdeas = ({
    searchText = '',
    offset = 0,
    limit = 30,
    descending = true,
    tagId = ''
}: IdeaSearchQuery) => {
    return useQuery({
        queryKey: ['getIdeas'],
        queryFn: () => getIdeas({searchText, offset, limit, descending, tagId}),
    });
}
