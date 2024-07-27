import {TagColors, TAG_COLOR_MAPPER} from "@/types/tag-colors";
import {useRef, useEffect} from "react";

export const TagColorPicker = ({ selectedColor = 'color1', onSelectColor }: {
    selectedColor?: TagColors;
    onSelectColor: (color: TagColors) => void;
}) => {
    const colorRefs = useRef<{ [key in TagColors]?: HTMLButtonElement | null }>({});

    useEffect(() => {
        // 포커스 초기 설정
        if (colorRefs.current[selectedColor]) {
            colorRefs.current[selectedColor]!.focus();
        }
    }, [selectedColor]);

    const renderColorOptions = () => {
        return (Object.keys(TAG_COLOR_MAPPER) as TagColors[]).map(color => (
            <button
                key={color}
                ref={el => colorRefs.current[color] = el}
                className={`${TAG_COLOR_MAPPER[color]} w-6 h-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white`}
                onClick={() => onSelectColor(color)}
                aria-label={`Select ${color}`}
            />
        ));
    };

    return (
        <div className="flex gap-2 w-full">
            {renderColorOptions()}
        </div>
    );
};
