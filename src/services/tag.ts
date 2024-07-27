import {AxiosResponse} from "axios";
import {API} from "@/lib/axios";
import type {TagSearchQuery, TagFetchResponse, Tag} from "@/types/tag-fetch";

/**
 * 태그 목록 조회 요청
 * @param searchQuery
 */
export const getTags = (searchQuery: TagSearchQuery): Promise<AxiosResponse<TagFetchResponse>> => {
    return API.get('/v1/tags', {
        params: searchQuery
    });
}

/**
 * 단일 태그 조회 요청
 * @param tagId
 */
export const getTag = (tagId: string): Promise<AxiosResponse<Tag>> => {
    return API.get(`/v1/tags/${tagId}`);
}
