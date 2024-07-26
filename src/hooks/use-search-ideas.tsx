import {useState} from "react";
import {useQuery, useInfiniteQuery} from "@tanstack/react-query";
import {getIdeas} from "@/services/idea";

export const useSearchIdeas = ({
    tagId = ''
}) => {
    const [searchText, setSearchText] = useState("");
    const [isDescending, setIsDescending] = useState(true);
    const [pageSize, setPageSize] = useState(12);

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['getIdeas', searchText, pageSize, isDescending],
        queryFn: ({ pageParam = 0 }) => getIdeas({
            searchText,
            offset: pageParam * pageSize,
            limit: pageSize,
            descending: isDescending,
            tagId
        }),
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.data.data.length === 0) {
                return undefined;
            }
            return lastPageParam + 1
        },
        initialPageParam: 0
    });

    return {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        setSearchText,
        setPageSize,
        setIsDescending
    }
}
