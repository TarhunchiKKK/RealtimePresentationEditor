import { ISlide } from "./slide";

export interface IPresentation {
    id: string;

    title: string;

    slides: ISlide[];
}
