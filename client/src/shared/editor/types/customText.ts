import {
    FontFamilies,
    FontSizes,
    TextColors,
    TextHeadings,
    TextMarks,
    TextTransforms,
} from "../enums";

export type CustomText = {
    text: string;
    [TextMarks.Bold]?: boolean;
    [TextMarks.Italic]?: boolean;
    [TextMarks.Underline]?: boolean;
    [TextMarks.FontSize]?: FontSizes;
    [TextMarks.FontFamily]?: FontFamilies;
    [TextMarks.Heading]?: TextHeadings;
    [TextMarks.Color]?: TextColors;
    [TextMarks.Transform]?: TextTransforms;
};
