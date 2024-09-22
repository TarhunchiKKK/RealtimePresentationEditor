import { KeyboardEventHandler } from "react";
import { Editor } from "slate";
import { hotKeysHandlers } from "../constants";
import { HotKeys } from "../enums";

export function useHotKeysHandlers(editor: Editor) {
    const handler: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (!event.ctrlKey) {
            return;
        }

        event.preventDefault();

        const key = event.key as HotKeys;
        if (hotKeysHandlers[key]) {
            console.log(key);
            hotKeysHandlers[key](editor);
        }
    };

    return handler;
}
