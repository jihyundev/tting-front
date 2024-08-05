import {useQuery} from "@tanstack/react-query";
import {getInsightSummary} from "@/services/insight";

export const useInsightSummary = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getInsightSummary'],
        queryFn: getInsightSummary
    });

    return {
        data,
        isLoading,
        isError
    }
}
