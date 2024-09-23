import { CustomText } from "./custom-text.type";

export type CustomElement = { type: "code" | "paragraph"; children: CustomText[] };
