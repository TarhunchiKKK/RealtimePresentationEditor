import { CSSProperties } from "react";
import { CustomText, TextHeadings } from "../../../shared/editor";
import { headingStyles } from "../constants";

export function calculateLeafStyle(text: CustomText) {
    let style: CSSProperties = {};

    style.fontWeight = text.bold ? "bold" : "normal";
    style.fontStyle = text.italic ? "italic" : "normal";
    style.textDecoration = text.underlined ? "underline" : "none";
    style.fontSize = text.fontSize || "inherit";
    style.fontFamily = text.fontFamily || "sans-serif";
    style.color = text.color || "black";
    style.textTransform = text.transform || "none";

    if (text.heading === TextHeadings.Main) {
        const headingStyle = headingStyles[text.heading];
        style = {
            ...style,
            ...headingStyle,
        };
    }

    return style;
}
