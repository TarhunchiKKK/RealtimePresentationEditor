import { Roles } from "src/roles/enums/roles.enum";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Presentation } from "./presentation.entity";

@Entity()
export class UserRoleOnPresentation {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ default: Roles.Viewer })
    role: Roles;

    @ManyToOne(() => User, (user: User) => user.rolesOnPresentations, { onDelete: "SET NULL" })
    user: User;

    @ManyToOne(
        () => Presentation,
        (presentation: Presentation) => presentation.userRolesOnPresentation,
        { onDelete: "SET NULL" },
    )
    presentation: Presentation;
}
