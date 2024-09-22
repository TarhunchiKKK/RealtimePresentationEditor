import { useContext } from "react";
import { EditorContext } from "../../../features/editor";
import { toggleFontStyle, toggleFontWeight, toggleTextDecoration } from "../../../shared/editor";

export function useFormatting() {
    const { editor } = useContext(EditorContext);

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
        handleToggleFontWeight,
        handleToggleFontStyle,
        handleToggleTextDecoration,
    };
}
