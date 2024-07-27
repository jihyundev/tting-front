'use client'

import {Typography} from "@/components/typography";
import {TagColors} from "@/types/tag-colors";

const colorClasses = {
    color1: 'bg-color1',
    color2: 'bg-color2',
    color3: 'bg-color3',
    color4: 'bg-color4',
    color5: 'bg-color5',
    color6: 'bg-color6',
    color7: 'bg-color7',
    color8: 'bg-color8',
};

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
            className={`p-1.5 h-7 text-ellipsis overflow-hidden rounded-full ${colorClasses[color]}`}
            onClick={onSelectTag}
        >
            <Typography variant="button2">{label}</Typography>
        </button>
    )
}
