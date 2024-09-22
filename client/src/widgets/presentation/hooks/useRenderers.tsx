import { useCallback } from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import { ElementTypes } from "../enums";
import { TextElement, CodeElement, Leaf } from "../ui";

export function useRenderers() {
    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case ElementTypes.Code:
                return <CodeElement {...props} />;
            case ElementTypes.Paragraph:
                return <TextElement {...props} />;
            default:
                return <TextElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props: RenderLeafProps) => {
        return <Leaf {...props} />;
    }, []);

    return {
        renderElement,
        renderLeaf,
    };
}
