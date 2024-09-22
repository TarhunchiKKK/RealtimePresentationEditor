import { KeyboardEventHandler } from "react";
import { Editor, Transforms, Element, Node } from "slate";
import { HotKeys, TextElementTypes } from "../../types";

const hotKeysHandlers: Record<HotKeys, (editor: Editor) => void> = {
    [HotKeys.Code]: (editor: Editor) => {
        const [match] = Editor.nodes<Node>(editor, {
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
};

export function useHotKeys(editor: Editor) {
    const handler: KeyboardEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();

        if (!event.ctrlKey) {
            return;
        }

        const key = event.key as HotKeys;
        if (hotKeysHandlers[key]) {
            hotKeysHandlers[key](editor);
        }
    };

    return handler;
}
