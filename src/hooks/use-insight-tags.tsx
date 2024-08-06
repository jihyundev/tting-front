import {useQuery} from "@tanstack/react-query";
import {getInsightTagCount} from "@/services/insight";

const COLOR_MAP = {
    color1: "#FFD6EA",
    color2: "#C2DEFF",
    color3: "#F4D3FF",
    color4: "#FFCACA",
    color5: "#FFEBBE",
    color6: "#FFDAB9",
    color7: "#B8EDF4",
    color8: "#CCF4D2"
}

export const useInsightTags = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getInsightTagCount'],
        queryFn: getInsightTagCount
    });

    const chartData = data?.data?.data.slice(0, 5).map(tag => {
        return {
            name: tag.key,
            count: tag.value,
            fill: COLOR_MAP[tag.color] || "#FFD6EA"
        }
    })

    return {
        data,
        chartData,
        isLoading,
        isError
    }
}
