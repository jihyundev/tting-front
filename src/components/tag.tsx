'use client'

import {Typography} from "@/components/typography";
import {TagColors} from "@/types/tag-colors";

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
            className={`p-1.5 h-7 rounded-full bg-${color}`}
            onClick={onSelectTag}
        >
            <Typography variant="button2">{label}</Typography>
        </button>
    )
}
