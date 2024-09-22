import { useCallback } from "react";
import { ElementTypes } from "../../types";
import { CodeElement, Leaf, ShapeElement, TextElement } from "../../ui";
import { RenderElementProps } from "slate-react";

export function useRenderers() {
    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case ElementTypes.Code:
                return <CodeElement {...props} />;
            case ElementTypes.Paragraph:
                return <TextElement {...props} />;
            case ElementTypes.Shape:
                return <ShapeElement {...props} />;
            default:
                return <TextElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />;
    }, []);

    return {
        renderElement,
        renderLeaf,
    };
}
