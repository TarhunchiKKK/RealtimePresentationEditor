import { Editor, Element, Transforms } from "slate";
import { HotKeys, TextElementTypes } from "../types";
import { HistoryEditor } from "slate-history";

export const hotKeysHandlers: Record<HotKeys, (editor: Editor) => void> = {
    [HotKeys.Code]: (editor: Editor) => {
        const [match] = Editor.nodes(editor, {
            match: (node) => node.type === TextElementTypes.Code,
        });

        Transforms.setNodes(
            editor,
            { type: match ? TextElementTypes.Paragraph : TextElementTypes.Code },
            { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) },
        );
    },
    [HotKeys.Bold]: (editor: Editor) => {
        Editor.addMark(editor, "bold", true);
    },
    [HotKeys.Italic]: (editor: Editor) => {
        Editor.addMark(editor, "italic", true);
    },
    [HotKeys.Underlined]: (editor: Editor) => {
        Editor.addMark(editor, "underlined", true);
    },
    [HotKeys.Undo]: (editor: Editor) => {
        HistoryEditor.undo(editor);
    },
    [HotKeys.Redo]: (editor: Editor) => {
        HistoryEditor.redo(editor);
    },
};
