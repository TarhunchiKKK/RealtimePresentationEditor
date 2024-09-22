import { Editor } from "slate";
import { FontFamilies, TextMarks } from "../enums";

export function setTextFontFamily(editor: Editor, fontFamily: FontFamilies) {
    Editor.addMark(editor, TextMarks.FontFamily, fontFamily);
}
