'use client'

import {useState} from "react";
import {XIcon} from "lucide-react";
import {Typography} from "@/components/typography";
import {TagColors} from "@/types/tag-colors";
import {TAG_COLOR_MAPPER} from "@/types/tag-colors";

export const Tag = ({ label, color, onClick, readOnly = true, onDelete = () => {} }: {
    label: string,
    color: TagColors,
    onClick?: (label: string) => void,
    readOnly?: boolean,
    onDelete?: () => void
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const onSelectTag = () => {
        if (onClick) {
            onClick(label)
        }
    }
    return (
        <div
            className={`flex items-center p-1.5 h-7 text-ellipsis overflow-hidden rounded-full ${TAG_COLOR_MAPPER[color]}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                type="button"
                onClick={onSelectTag}
            >
                <Typography variant="button2">{label}</Typography>
            </button>
            {!readOnly && isHovered && (
                <XIcon
                    size={16}
                    className="cursor-pointer"
                    onClick={() => onDelete()}
                />
            )}
        </div>
    )
}
