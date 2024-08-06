import {useQuery} from "@tanstack/react-query";
import {getInsightBalance} from "@/services/insight";

export const useInsightBalance = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getInsightBalance'],
        queryFn: getInsightBalance
    });

    const chartData = data?.data?.data.map((item) => {
        return {
            category: item.key,
            value: item.value
        }
    })

    return {
        data,
        chartData,
        isLoading,
        isError,
        error
    }
}
