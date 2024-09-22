import { useContext } from "react";
import { EditorContext } from "../../../features/editor";
import { setTextTransform, TextTransforms } from "../../../shared/editor";

export function useTextTransfoms() {
    const { editor } = useContext(EditorContext);

    const handleTextUppercase = () => {
        setTextTransform(editor, TextTransforms.Uppercase);
    };

    const handleTextLowercase = () => {
        setTextTransform(editor, TextTransforms.Lowercase);
    };

    const handleTextCapitalize = () => {
        setTextTransform(editor, TextTransforms.Capitalize);
    };

    return {
        handleTextUppercase,
        handleTextLowercase,
        handleTextCapitalize,
    };
}
