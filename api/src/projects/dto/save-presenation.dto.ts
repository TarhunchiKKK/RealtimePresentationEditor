import { SaveSlideDto } from "./save-slide.dto";

export class SavePresentationDto {
    id: string;

    slides: SaveSlideDto[];
}
