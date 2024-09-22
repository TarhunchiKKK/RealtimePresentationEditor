import { Editor } from "slate";
import { HotKeys } from "../enums";
import {
    redoAction,
    setTextHeading,
    setTextTransform,
    TextHeadings,
    TextTransforms,
    toggleFontStyle,
    toggleFontWeight,
    toggleTextDecoration,
    undoAction,
} from "../../../shared/editor";

export const hotKeysHandlers: Record<HotKeys, (editor: Editor) => void> = {
    [HotKeys.Undo]: undoAction,
    [HotKeys.Redo]: redoAction,
    [HotKeys.Bold]: toggleFontWeight,
    [HotKeys.Italic]: toggleFontStyle,
    [HotKeys.Underlined]: toggleTextDecoration,
    [HotKeys.Heading1]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading1),
    [HotKeys.Heading2]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading2),
    [HotKeys.Heading3]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading3),
    [HotKeys.Heading4]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading4),
    [HotKeys.Heading5]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading5),
    [HotKeys.Heading6]: (editor: Editor) => setTextHeading(editor, TextHeadings.Heading6),
    [HotKeys.MainText]: (editor: Editor) => setTextHeading(editor, TextHeadings.Main),
    [HotKeys.Uppercase]: (editor: Editor) => setTextTransform(editor, TextTransforms.Uppercase),
    [HotKeys.Lowercase]: (editor: Editor) => setTextTransform(editor, TextTransforms.Lowercase),
    [HotKeys.Capitalize]: (editor: Editor) => setTextTransform(editor, TextTransforms.Capitalize),
};
