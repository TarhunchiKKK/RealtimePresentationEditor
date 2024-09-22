import { Editor } from "slate";
import { FontSizes, TextMarks } from "../enums";

export function setTextFontSize(editor: Editor, fontSize: FontSizes) {
    Editor.addMark(editor, TextMarks.FontSize, fontSize);
}
