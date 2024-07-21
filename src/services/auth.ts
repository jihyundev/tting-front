import { API } from "@/services";

export const postSocialLogin = async (provider: string, token: string) => {
    return await API.post('/v1/users/social-login', {
        provider,
        token,
    });
}
