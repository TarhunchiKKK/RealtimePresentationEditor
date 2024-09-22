import { Editor } from "slate";
import { TextMarks } from "../enums";

export function toggleFontWeight(editor: Editor) {
    Editor.addMark(editor, TextMarks.Bold, true);
}
