import { CustomElement } from "../types/custom-element.type";
import { CustomText } from "../types/custom-text.type";

export class SaveSlideDto {
    id: string;

    elements: (CustomText | CustomElement)[];
}
