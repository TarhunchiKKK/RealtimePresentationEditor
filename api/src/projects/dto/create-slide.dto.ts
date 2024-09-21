import { Presentation } from "../entities/presentation.entity";

export class CreateSlideDto {
    presentation: Pick<Presentation, "id">;
}
