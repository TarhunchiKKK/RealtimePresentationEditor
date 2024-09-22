import { RenderElementProps } from "slate-react";

export const CodeElement = (props: RenderElementProps) => {
    return (
        <pre {...props.attributes} style={{ backgroundColor: "block", color: "white" }}>
            <code>{props.children}</code>
        </pre>
    );
};
