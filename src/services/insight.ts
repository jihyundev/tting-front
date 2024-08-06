import {AxiosResponse} from "axios";
import { API } from "@/lib/axios";
import {InsightSummary, InsightDailyCount} from "@/types/insights-fetch";

/**
 * 아이디어 통계 요약 정보 요청
 */
export const getInsightSummary = (): Promise<AxiosResponse<InsightSummary>> => {
    return API.get('/v1/insights/summary');
}

/**
 * 최근 30일간 일자별 아이디어 생성 수 요청
 */
export const getInsightDailyCount = (): Promise<AxiosResponse<InsightDailyCount>> => {
    return API.get('/v1/insights/daily-count');
}
