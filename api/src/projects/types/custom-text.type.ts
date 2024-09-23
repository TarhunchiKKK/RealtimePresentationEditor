import { TextMarks } from "../enums/text-marks.enum";

export type CustomText = {
    text: string;
    [TextMarks.Bold]?: boolean;
    [TextMarks.Italic]?: boolean;
    [TextMarks.Underline]?: boolean;
    [TextMarks.FontSize]?: number;
    [TextMarks.FontFamily]?: string;
    [TextMarks.Heading]?: string;
    [TextMarks.Color]?: string;
    [TextMarks.Transform]?: string;
};
