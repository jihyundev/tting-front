import {AxiosResponse} from "axios";
import {API} from "@/lib/axios";
import {TagSearchQuery, TagFetchResponse} from "@/types/tag-fetch";

/**
 * 태그 목록 조회 요청
 * @param searchQuery
 */
export const getTags = (searchQuery: TagSearchQuery): Promise<AxiosResponse<TagFetchResponse>> => {
    return API.get('/v1/tags', {
        params: searchQuery
    });
}
