import { CustomElement, CustomText } from "../../../shared/editor";

export type TSaveSlideQueryArgs = {
    id: string;

    elements: (CustomText | CustomElement)[];
};
