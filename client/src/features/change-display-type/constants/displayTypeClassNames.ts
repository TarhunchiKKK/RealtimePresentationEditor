import { DisplayTypes } from "../enums";

export const displayTypeClassNames: Record<DisplayTypes, string> = {
    [DisplayTypes.Grid]: "grid grid-cols-6 gap-6",
    [DisplayTypes.Row]: "",
};
