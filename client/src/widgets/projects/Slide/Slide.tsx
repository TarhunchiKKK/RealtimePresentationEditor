import { useState } from "react";
import { BaseEditor, createEditor } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { useHotKeys, useRenderers } from "../lib";
import { slateInitialValue } from "../constants";
import { CustomElement, CustomText } from "../types";
import { HistoryEditor, withHistory } from "slate-history";

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

export function Slide() {
    const [editor] = useState(() => withReact(withHistory(createEditor())));
    const handleEditableKeysDown = useHotKeys(editor);
    const { renderElement, renderLeaf } = useRenderers();

    return (
        <Slate editor={editor} initialValue={slateInitialValue}>
            <Editable
                onKeyDown={handleEditableKeysDown}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                className="border-2 border-gray-300 outline-none"
            />
        </Slate>
    );
}
