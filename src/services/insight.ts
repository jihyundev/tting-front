import {AxiosResponse} from "axios";
import { API } from "@/lib/axios";
import {
    InsightSummary,
    InsightDailyCount,
    InsightTagCount,
    InsightBalance,
    InsightIdeaProposal
} from "@/types/insights-fetch";

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

/**
 * 태그별 아이디어 수 조회 요청
 */
export const getInsightTagCount = (): Promise<AxiosResponse<{data: InsightTagCount[], count: number}>> => {
    return API.get('/v1/insights/tags');
}

/**
 * 아이디어 균형 점수 조회 요청
 */
export const getInsightBalance = (): Promise<AxiosResponse<InsightBalance>> => {
    return API.get('/v1/insights/balance');
}

/**
 * 아이디어 제안 조회 요청
 */
export const getInsightIdeaProposals = (): Promise<AxiosResponse<InsightIdeaProposal[]>> => {
    return API.get('/v1/insights/idea-proposals');
}

/**
 * 아이디어 제안 거부 요청
 * @param proposalId
 */
export const postRejectIdeaProposal = (proposalId: string): Promise<AxiosResponse<{ message: string }>> => {
    return API.post(`/v1/insights/idea-proposals/reject`, {
        proposalId
    });
}
