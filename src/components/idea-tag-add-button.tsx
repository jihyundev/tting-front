import {Typography} from "@/components/typography";

export const IdeaTagAddButton = () => {
    return (
        <>
            <button type="button" className="flex items-center px-2 py-3 h-9 text-ellipsis overflow-hidden rounded-full border border-gray-400">
                <Typography variant="button1">태그 추가...</Typography>
            </button>
        </>
    )
}
