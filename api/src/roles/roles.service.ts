import { Injectable } from "@nestjs/common";
import { RolePair } from "./entities/role-pair.entity";
import { Roles } from "./enums/roles.enum";
import { ActionsOnThePresentation } from "src/presentations/enums/actions-on-the-presentation.enum";
import { RoleDependentActions } from "./constants/role-dependent-actions";

@Injectable()
export class RolesService {
    public getAvailableRoles(): RolePair[] {
        return Object.entries(Roles).map(([title, role]) => new RolePair(title, role));
    }

    public checkPermissions(role: Roles, action: ActionsOnThePresentation): boolean {
        return RoleDependentActions[role].includes(action);
    }

    public getAvailableActions(role: Roles) {
        return RoleDependentActions[role];
    }
}
