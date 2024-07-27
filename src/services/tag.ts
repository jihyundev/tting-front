import {AxiosResponse} from "axios";
import {API} from "@/lib/axios";
import type {TagSearchQuery, TagFetchResponse, Tag} from "@/types/tag-fetch";
import {TagColors} from "@/types/tag-colors";

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

/**
 * 태그 생성 요청
 * @param tag
 */
export const postTag = ({ name, color }: {
    name: string;
    color: TagColors;
}): Promise<AxiosResponse<Tag>> => {
    return API.post('/v1/tags', { name, color });
}

/**
 * 태그 수정 요청
 * @param tagId
 * @param name
 * @param color
 */
export const postTagUpdate = ({ tagId, name, color }: {
    tagId: string;
    name: string;
    color: TagColors;
}): Promise<AxiosResponse<Tag>> => {
    return API.put(`/v1/tags/${tagId}`, { name, color });
}
