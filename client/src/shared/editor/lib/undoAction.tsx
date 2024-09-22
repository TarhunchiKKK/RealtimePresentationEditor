import { Editor } from "slate";
import { HistoryEditor } from "slate-history";

export function undoAction(editor: Editor) {
    HistoryEditor.undo(editor);
}
