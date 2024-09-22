import { RenderElementProps } from "slate-react";

export const TextElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};
