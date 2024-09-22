import { CustomShape } from "./customShape";
import { CustomText } from "./customText";

export type CustomElement = { type: "code" | "paragraph"; children: CustomText[] } | CustomShape;
