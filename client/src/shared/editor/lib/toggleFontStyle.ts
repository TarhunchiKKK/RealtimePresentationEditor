import { Editor } from "slate";
import { TextMarks } from "../enums";

export function toggleFontStyle(editor: Editor) {
    Editor.addMark(editor, TextMarks.Italic, true);
}
