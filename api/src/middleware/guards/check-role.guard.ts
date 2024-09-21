import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RolesService } from "src/roles/roles.service";
import { UserRolesService } from "src/projects/services/user-roles.service";
import { PresentationIdHeader, UserIdHeader } from "../constants/headers";
import { MissingPermissionsException } from "src/shared/exceptions/missing-permissions.exception";
import { ProvidesAction } from "../decorators/provides-action";

@Injectable()
export class CheckRoleGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
        private readonly usersRolesService: UserRolesService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const action = this.reflector.get(ProvidesAction, context.getHandler());

        if (!action) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const headers = request.headers;

        const presentationId = headers[PresentationIdHeader] as string;
        const userId = headers[UserIdHeader] as string;

        if (!presentationId || !userId) {
            throw new MissingPermissionsException();
        }

        const userRole = await this.usersRolesService.findOne(presentationId, userId);

        if (!userRole) {
            throw new MissingPermissionsException();
        }

        const actionEnable = this.rolesService.checkPermissions(userRole.role, action);

        if (!actionEnable) {
        }

        return true;
    }
}
