import { TextHeadings } from "../../../shared/editor";

export const headingStyles: Record<TextHeadings, object> = {
    [TextHeadings.Main]: {
        fontSize: "16px",
        fontWeight: "normal",
    },
    [TextHeadings.Heading1]: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    [TextHeadings.Heading2]: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    [TextHeadings.Heading3]: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    [TextHeadings.Heading4]: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    [TextHeadings.Heading5]: {
        fontSize: "14px",
        fontWeight: "bold",
    },
    [TextHeadings.Heading6]: {
        fontSize: "12px",
        fontWeight: "bold",
    },
};
