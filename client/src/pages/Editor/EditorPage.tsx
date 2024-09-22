import { EditorContextProvider } from "../../features/editor";
import { EditorToolbar } from "../../widgets/editor-toolbar";
import { Slide } from "../../widgets/projects/Slide/Slide";

export function EditorPage() {
    // return <Slide></Slide>;
    return (
        <EditorContextProvider>
            <EditorToolbar />
        </EditorContextProvider>
    );
}
