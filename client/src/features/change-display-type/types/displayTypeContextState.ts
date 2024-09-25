import { IPresentation } from "../../../entities/presentations";
import { DisplayTypes } from "../enums";

export type TDisplayTypeContextState = {
    displayType: DisplayTypes;
    setDisplayType: (_: DisplayTypes) => void;
    renderPresentation: (_: IPresentation) => JSX.Element;
    wrapperClassName: string;
};
