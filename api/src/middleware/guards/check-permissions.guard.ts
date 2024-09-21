import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ActionsOnThePresentation } from "src/presentations/enums/actions-on-the-presentation.enum";
import { Roles } from "src/roles/enums/roles.enum";
import { RolesService } from "src/roles/roles.service";
import { MissingPermissionsException } from "src/shared/exceptions/missing-permissions.exception";

@Injectable()
export class CheckPermissionsGuard implements CanActivate {
    constructor(private readonly rolesService: RolesService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const role: Roles = request.body.role;
        const action: ActionsOnThePresentation = request.body.action;

        const havePermissions = this.rolesService.checkPermissions(role, action);
        if (!havePermissions) {
            throw new MissingPermissionsException();
        }

        return true;
    }
}
