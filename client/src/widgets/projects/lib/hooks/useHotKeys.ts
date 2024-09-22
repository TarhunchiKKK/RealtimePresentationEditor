import { KeyboardEventHandler } from "react";
import { Editor } from "slate";
import { HotKeys } from "../../types";
import { hotKeysHandlers } from "../../constants";

export function useHotKeys(editor: Editor) {
    const handler: KeyboardEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();

        if (!event.ctrlKey) {
            return;
        }

        const key = event.key as HotKeys;
        if (hotKeysHandlers[key]) {
            console.log(key);
            hotKeysHandlers[key](editor);
        }
    };

    return handler;
}
