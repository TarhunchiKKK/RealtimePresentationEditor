import { useContext } from "react";
import { Editable, Slate } from "slate-react";
import { EditorContext } from "../../features/editor";
import { useHotKeysHandlers } from "../../features/hot-keys";
import { slateInitialValue } from "./constants";
import { useRenderers } from "./hooks";

export function Presentation() {
    const { editor } = useContext(EditorContext);
    const handleHotKeys = useHotKeysHandlers(editor);
    const { renderElement, renderLeaf } = useRenderers();

    return (
        <Slate
            editor={editor}
            initialValue={slateInitialValue}
            onChange={(value) => console.log(value)}
        >
            <Editable
                onKeyDown={handleHotKeys}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                className="px-8 py-4 border-2 border-gray-300 outline-none"
            ></Editable>
        </Slate>
    );
}
