import {AxiosResponse} from "axios";
import { API } from "@/lib/axios";
import type {IdeaCreationItem} from "@/types/idea-create";

/**
 * 아이디어 생성 요청
 * @param baseInput
 * @param instruction
 */
export const postGenerateIdea = (baseInput: string, instruction: string) => {
    return API.post<AxiosResponse<IdeaCreationItem[]>>('/v1/ideas/generate-ideas', {
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
export const getIdeas = () => {
    return API.get('/v1/ideas');
}
