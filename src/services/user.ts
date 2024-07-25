import { API } from "@/lib/axios";
import type { UserProfile } from "@/types/user";
import {AxiosResponse} from "axios";

/**
 * 소셜 로그인 요청
 * @param provider
 * @param token
 */
export const postSocialLogin = async (provider: string, token: string) => {
    return await API.post('/v1/users/social-login', {
        provider,
        token,
    });
}

/**
 * 유저 본인 조회 요청
 */
export const getMe = async (): Promise<AxiosResponse<UserProfile>> => {
    return await API.get('/v1/users/me');
}

/**
 * 유저 프로필 수정 요청
 * @param name
 * @param profileImage
 */
export const postProfile = async ({ name, profileImage }: {
    name: string;
    profileImage: string;
}) => {
    return await API.post('/v1/users/profile', {
        name,
        profile_image_file: profileImage,
    });
}

/**
 * 유저 계정 삭제 요청
 */
export const deleteUser = async () => {
    return await API.delete('/v1/users');
}
