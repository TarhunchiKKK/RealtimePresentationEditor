import { RenderLeafProps } from "slate-react";
import { calculateLeafStyle } from "../helpers";

export function Leaf(props: RenderLeafProps) {
    const style = calculateLeafStyle(props.leaf);

    return (
        <span {...props.attributes} style={style}>
            {props.children}
        </span>
    );
}
