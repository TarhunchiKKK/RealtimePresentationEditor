import { useContext } from "react";
import { EditorContext } from "../../../features/editor";
import { redoAction, undoAction } from "../../../shared/editor";

export function useHistory() {
    const { editor } = useContext(EditorContext);

    const handleRedoAction = () => {
        redoAction(editor);
    };

    const handleUndoAction = () => {
        undoAction(editor);
    };

    return {
        handleRedoAction,
        handleUndoAction,
    };
}
