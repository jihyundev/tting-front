import {useQuery} from "@tanstack/react-query";
import {getInsightDailyCount} from "@/services/insight";
import {formatChartAxisDate} from "@/utils/date-util";

export const useInsightDailyCount = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getInsightDailyCount'],
        queryFn: getInsightDailyCount
    });

    const chartData = data?.data?.data.map((item) => ({
        date: formatChartAxisDate(item.key),
        count: item.value
    }));

    return {
        data,
        chartData,
        isLoading,
        isError,
        error
    }
}
