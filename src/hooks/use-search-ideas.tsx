import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getIdeas} from "@/services/idea";

export const useSearchIdeas = ({
    tagId = ''
}) => {
    const [searchText, setSearchText] = useState("");
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(30);
    const [isDescending, setIsDescending] = useState(true);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getIdeas', searchText, offset, limit, isDescending],
        queryFn: () => getIdeas({
            searchText,
            offset,
            limit,
            descending: isDescending,
            tagId
        }),
    });

    return {
        data,
        isLoading,
        isError,
        error,
        setSearchText,
        setOffset,
        setLimit,
        setIsDescending
    }
}
