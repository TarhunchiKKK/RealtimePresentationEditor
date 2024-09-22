import { Editor } from "slate";
import { TextHeadings, TextMarks } from "../enums";

export function setTextHeading(editor: Editor, heading: TextHeadings) {
    Editor.addMark(editor, TextMarks.Heading, heading);
}
