import {AxiosResponse} from "axios";
import { API } from "@/lib/axios";
import type {IdeaCreationItem} from "@/types/idea-create";
import type {IdeaFetchResponse, IdeaSearchQuery} from "@/types/idea-fetch";

/**
 * 아이디어 생성 요청
 * @param baseInput
 * @param instruction
 */
export const postGenerateIdea = (baseInput: string, instruction: string): Promise<AxiosResponse<IdeaCreationItem[]>> => {
    return API.post('/v1/ideas/generate-ideas', {
        text: baseInput,
        instruction,
    });
}

/**
 * 생성한 아이디어 저장 요청
 * @param idea
 */
export const postGeneratedIdea = (idea: IdeaCreationItem) => {
    return API.post('/v1/ideas/add-generated-idea', idea)
}

/**
 * 아이디어 목록 조회 요청
 */
export const getIdeas = (searchQuery: IdeaSearchQuery): Promise<AxiosResponse<IdeaFetchResponse>> => {
    return API.get('/v1/ideas', {
        params: searchQuery
    });
}

/**
 * 아이디어 수정 요청
 * @param id
 * @param content
 */
export const postIdea = ({ id, content }: {
    id: string;
    content: string;
}) => {
    return API.post(`/v1/ideas/${id}`, {
        content
    });
}
