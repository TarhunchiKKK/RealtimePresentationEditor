import { RenderLeafProps } from "slate-react";

export function Leaf(props: RenderLeafProps) {
    const style = {
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecoration: props.leaf.underlined ? "underline" : "none",
    };

    return (
        <span {...props.attributes} style={style}>
            {props.children}
        </span>
    );
}
