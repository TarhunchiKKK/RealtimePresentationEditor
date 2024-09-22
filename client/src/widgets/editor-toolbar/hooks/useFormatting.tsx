import { useContext, useMemo, useState } from "react";
import { defaultTextColor } from "../constants";
import { EditorContext } from "../../../features/editor";
import {
    TextColors,
    toggleFontStyle,
    toggleFontWeight,
    toggleTextDecoration,
    setTextColor,
} from "../../../shared/editor";

export function useFormatting() {
    const { editor } = useContext(EditorContext);

    const [currentTextColor, setCurrentTextColor] = useState<TextColors>(defaultTextColor);

    const availableTextColors = useMemo(() => {
        return Object.values(TextColors);
    }, []);

    const handleChangeTextColor = (newTextColor: string) => {
        const value = newTextColor as TextColors;
        setCurrentTextColor(value);
        setTextColor(editor, value);
    };

    const handleToggleFontWeight = () => {
        toggleFontWeight(editor);
    };

    const handleToggleFontStyle = () => {
        toggleFontStyle(editor);
    };

    const handleToggleTextDecoration = () => {
        toggleTextDecoration(editor);
    };

    return {
        textColor: currentTextColor,
        availableTextColors,
        handleChangeTextColor,
        handleToggleFontWeight,
        handleToggleFontStyle,
        handleToggleTextDecoration,
    };
}
