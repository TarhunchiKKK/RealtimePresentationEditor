import { Editor } from "slate";
import { TextMarks, TextTransforms } from "../enums";

export function setTextTransform(editor: Editor, transform: TextTransforms) {
    Editor.addMark(editor, TextMarks.Transform, transform);
}
