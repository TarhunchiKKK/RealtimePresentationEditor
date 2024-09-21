import { User } from "src/users/entities/user.entity";
import { Presentation } from "../entities/presentation.entity";
import { Roles } from "src/roles/enums/roles.enum";

export class UpdateUserRoleDto {
    presentation: Pick<Presentation, "id">;

    user: Pick<User, "id">;

    role: Roles;
}
