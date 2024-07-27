'use client'

import {Typography} from "@/components/typography";
import {TagColors} from "@/types/tag-colors";
import {TAG_COLOR_MAPPER} from "@/types/tag-colors";

export const Tag = ({ label, color, onClick }: {
    label: string
    color: TagColors
    onClick?: (label: string) => void
}) => {
    const onSelectTag = () => {
        if (onClick) {
            onClick(label)
        }
    }
    return (
        <button
            type="button"
            className={`p-1.5 h-7 text-ellipsis overflow-hidden rounded-full ${TAG_COLOR_MAPPER[color]}`}
            onClick={onSelectTag}
        >
            <Typography variant="button2">{label}</Typography>
        </button>
    )
}
