import { Logo } from "@/components/icons";

export default function Page() {
  return (
    <>
      <div className="font-mono text-sm">
        메인 페이지
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          By{" "}
          <Logo />
        </a>
      </div>
    </>
  );
}
