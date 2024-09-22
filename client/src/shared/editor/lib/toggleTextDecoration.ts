import { Editor } from "slate";
import { TextMarks } from "../enums";

export function toggleTextDecoration(editor: Editor) {
    Editor.addMark(editor, TextMarks.Underline, true);
}
