import { createContext, useMemo, useState } from "react";
import { IEditorContextProps, IEditorContextState } from "../types";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { createEditor } from "slate";

const defaultValue: IEditorContextState = {} as IEditorContextState;

export const EditorContext = createContext(defaultValue);

export function EditorContextProvider({ children }: IEditorContextProps) {
    const [editor] = useState(() => withReact(withHistory(createEditor())));

    const value = useMemo(
        () => ({
            editor: editor,
        }),
        [editor],
    );

    return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
