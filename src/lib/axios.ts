import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const isServer = typeof window === 'undefined';

const instance = axios.create({
    baseURL: "https://third-brain-tting.kro.kr/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
})

const getRefreshToken = async () => {
    if (isServer) {
        const { cookies } = await import('next/headers');
        return cookies().get("refreshToken")?.value;
    } else {
        return getCookie("refreshToken");
    }
}
const getAccessToken = async () => {
    if (isServer) {
        const { cookies } = await import('next/headers');
        return cookies().get("accessToken")?.value;
    } else {
        return getCookie("accessToken");
    }
}
const updateAccessToken = async (token: string) => {
    if (isServer) {
        const { cookies } = await import('next/headers');
        return cookies().set("accessToken", token);
    } else {
        return setCookie("accessToken", token);
    }
}

const refreshAccessToken = async () => {
    const refreshToken = await getRefreshToken();
    try {
        const response = await instance.post('/v1/users/refresh-token', {
            refreshToken,
        });
        const newAccessToken = response.data.accessToken;
        updateAccessToken(newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}

instance.interceptors.request.use(
    async function (config) {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        // 토큰이 만료된 경우
        if (error.response.status === 403) {
            try {
                const newAccessToken = await refreshAccessToken();
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axios(originalRequest);
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                throw refreshError;
            }
        }

        return Promise.reject(error);
    }
);

export { instance as API }
