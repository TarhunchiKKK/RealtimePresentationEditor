import { Editor } from "slate";
import { HistoryEditor } from "slate-history";

export function redoAction(editor: Editor) {
    HistoryEditor.undo(editor);
}
