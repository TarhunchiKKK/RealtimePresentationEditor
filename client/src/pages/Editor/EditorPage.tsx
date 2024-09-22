import { EditorContextProvider } from "../../features/editor";
import { EditorToolbar } from "../../widgets/editor-toolbar";
import { Presentation } from "../../widgets/presentation";

export function EditorPage() {
    return (
        <EditorContextProvider>
            <EditorToolbar />
            <Presentation />
        </EditorContextProvider>
    );
}
