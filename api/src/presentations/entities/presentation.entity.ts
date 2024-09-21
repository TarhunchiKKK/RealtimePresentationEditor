import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Slide } from "./slide.entity";
import { UserRoleOnPresentation } from "./user-role-on-presentation.entity";

@Entity()
export class Presentation {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @OneToMany(() => UserRoleOnPresentation, (role: UserRoleOnPresentation) => role.presentation, {
        onDelete: "NO ACTION",
    })
    userRolesOnPresentation: UserRoleOnPresentation[];

    @OneToMany(() => Slide, (slide: Slide) => slide.presentation, { cascade: true })
    slides: Slide[];
}
