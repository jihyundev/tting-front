import {useQuery} from "@tanstack/react-query";
import {getInsightIdeaProposals} from "@/services/insight";

export const useInsightProposals = () => {
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['getInsightProposals'],
        queryFn: getInsightIdeaProposals
    });

    return {
        data,
        isLoading,
        isError,
        error,
        isSuccess
    }
}
