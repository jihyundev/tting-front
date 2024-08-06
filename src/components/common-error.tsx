import Image from "next/image";

export const CommonError = (error) => {
    return (
        <div className="w-full h-full flex justify-center align-center">
            <Image
                src="/brand/error-logo.svg"
                alt="error-logo"
                width={280}
                height={200}
            />
            에러가 발생했어요. 에러: {error ? error.message : '알 수 없음'}
        </div>
    )
}
