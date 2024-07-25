import Image from "next/image";

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export function Spinner() {
    return (
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
}

export function KakaoLogo() {
    return (
        <Image
            src="/brand/kakao-logo.svg"
            alt="Kakao Logo"
            width={18}
            height={18}
            priority
        />
    );
}

export function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Image
            src="/brand/tting-logo.svg"
            alt="Tting Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
        />
    );
}

export function LogoExclude() {
    return (
        <Image
            src={"/brand/logo-exclude.svg"}
            alt={"logo"}
            width={60}
            height={60}
            priority
        />
    )
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8.25128 2.01642C8.40957 1.53511 9.09043 1.53511 9.24872 2.01642L10.8327 6.83262C10.8848 6.991 11.009 7.11523 11.1674 7.16732L15.9836 8.75128C16.4649 8.90957 16.4649 9.59043 15.9836 9.74872L11.1674 11.3327C11.009 11.3848 10.8848 11.509 10.8327 11.6674L9.24872 16.4836C9.09043 16.9649 8.40957 16.9649 8.25128 16.4836L6.66732 11.6674C6.61523 11.509 6.491 11.3848 6.33262 11.3327L1.51642 9.74872C1.03511 9.59043 1.03511 8.90957 1.51642 8.75128L6.33262 7.16732C6.491 7.11523 6.61523 6.991 6.66732 6.83262L8.25128 2.01642Z" fill="#8E9499"/>
            <path d="M21.1269 11.5246C21.3644 10.8027 22.3856 10.8027 22.6231 11.5246L24.999 18.7489C25.0772 18.9865 25.2635 19.1728 25.5011 19.251L32.7254 21.6269C33.4473 21.8644 33.4473 22.8856 32.7254 23.1231L25.5011 25.499C25.2635 25.5772 25.0772 25.7635 24.999 26.0011L22.6231 33.2254C22.3856 33.9473 21.3644 33.9473 21.1269 33.2254L18.751 26.0011C18.6728 25.7635 18.4865 25.5772 18.2489 25.499L11.0246 23.1231C10.3027 22.8856 10.3027 21.8644 11.0246 21.6269L18.2489 19.251C18.4865 19.1728 18.6728 18.9865 18.751 18.7489L21.1269 11.5246Z" fill="#8E9499"/>
        </svg>

    );
}
