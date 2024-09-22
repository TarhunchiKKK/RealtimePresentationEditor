import { useCallback } from "react";
import { TextElementTypes } from "../../types";
import { CodeElement, Leaf, TextElement } from "../../ui";
import { RenderElementProps } from "slate-react";

export function useRenderers() {
    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case TextElementTypes.Code:
                return <CodeElement {...props} />;
            case TextElementTypes.Paragraph:
                return <TextElement {...props} />;
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
