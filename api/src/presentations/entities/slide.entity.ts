import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Presentation } from "./presentation.entity";

@Entity()
export class Slide {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Presentation, (presentation: Presentation) => presentation.slides)
    presentation: Presentation;
}
