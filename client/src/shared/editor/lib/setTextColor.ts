import { Editor } from "slate";
import { TextColors, TextMarks } from "../enums";

export function setTextColor(editor: Editor, color: TextColors) {
    Editor.addMark(editor, TextMarks.Color, color);
}
