import {useState} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getTags} from "@/services/tag";

export const useTagList = ({ pageSize = 12 } = {}) => {
    const [isDescending, setIsDescending] = useState(true);

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['getTags', pageSize, isDescending],
        queryFn: ({ pageParam = 0 }) => getTags({
            offset: pageParam * pageSize,
            limit: pageSize,
            descending: isDescending
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
        setIsDescending
    }
}
