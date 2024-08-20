'use client'

import {useState} from "react";
import {XIcon} from "lucide-react";
import {Typography} from "@/components/typography";
import {TagColors} from "@/types/tag-colors";
import {TAG_COLOR_MAPPER} from "@/types/tag-colors";

export const Tag = ({ label, color, size = 'S', onClick, readOnly = true, onDelete = () => {} }: {
    label: string,
    color: TagColors,
    size?: 'S' | 'M',
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

    const getSizeClass = () => {
        if (size === 'S') {
            return `p-1.5 h-7`
        }
        if (size === 'M') {
            return `px-2 py-3 h-9`
        }
        return `p-1.5 h-7`
    };

    const getButtonVariant = () => {
        if (size === 'S') {
            return 'button2'
        }
        if (size === 'M') {
            return 'button1'
        }
        return 'button2'
    };

    return (
        <div
            className={`flex items-center ${getSizeClass()} text-ellipsis overflow-hidden rounded-full ${TAG_COLOR_MAPPER[color]}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                type="button"
                onClick={onSelectTag}
            >
                <Typography variant={getButtonVariant()}>{label}</Typography>
            </button>
            {!readOnly && isHovered && (
                <XIcon
                    size={16}
                    color={"#2F3133"}
                    className="cursor-pointer"
                    onClick={() => onDelete()}
                />
            )}
        </div>
    )
}
