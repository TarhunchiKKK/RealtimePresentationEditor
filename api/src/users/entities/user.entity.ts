import { UserRoleOnPresentation } from "src/projects/entities/user-role-on-presentation.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nickname: string;

    @Column({ nullable: true })
    avatar: string;

    @ManyToOne(() => UserRoleOnPresentation, (role: UserRoleOnPresentation) => role.user, {
        cascade: true,
    })
    rolesOnPresentations: UserRoleOnPresentation[];
}
