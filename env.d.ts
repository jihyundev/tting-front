// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_BASE_URL: string;
        AUTH_SECRET: string;
        AUTH_KAKAO_ID: string;
        AUTH_KAKAO_SECRET: string;
    }
}
