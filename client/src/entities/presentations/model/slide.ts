import { CustomElement, CustomText } from "../../../shared/editor";
import { IPresentation } from "./presentation";

export interface ISlide {
    id: string;

    presentation: IPresentation;

    elements: (CustomText | CustomElement)[];
}
