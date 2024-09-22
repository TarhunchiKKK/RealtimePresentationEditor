import { useState } from "react";
import { BaseEditor, createEditor } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { useHotKeys, useRenderers } from "../lib";
import { slateInitialValue } from "../constants";
import { CustomElement, CustomText } from "../types";

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

export function Slide() {
    const [editor] = useState(() => withReact(createEditor()));
    const handleEditableKeysDown = useHotKeys(editor);
    const { renderElement, renderLeaf } = useRenderers();

    return (
        <Slate editor={editor} initialValue={slateInitialValue}>
            <Editable
                onKeyDown={handleEditableKeysDown}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
            />
        </Slate>
    );
}
