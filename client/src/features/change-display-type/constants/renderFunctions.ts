import { IPresentation } from "../../../entities/presentations";
import { DisplayTypes } from "../enums";
import { renderGridPresentation, renderRowPresentation } from "../helpers";

export const renderFunctions: Record<DisplayTypes, (_: IPresentation) => JSX.Element> = {
    [DisplayTypes.Grid]: renderGridPresentation,
    [DisplayTypes.Row]: renderRowPresentation,
};
