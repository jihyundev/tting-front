import {AxiosResponse} from "axios";
import { API } from "@/lib/axios";
import {InsightSummary} from "@/types/insights-fetch";

export const getInsightSummary = (): Promise<AxiosResponse<InsightSummary>> => {
    return API.get('/v1/insights/summary');
}
