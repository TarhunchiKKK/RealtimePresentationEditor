import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RequiredRoles } from "../decorators/required-roles.decorator";
import { Roles } from "src/roles/enums/roles.enum";
import { MissingRolesException } from "src/shared/exceptions/missing-roles.exception";

@Injectable()
export class RequiredRoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get(RequiredRoles, context.getHandler());

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const role: Roles = request.body.role;
        const haveRole = requiredRoles.includes(role);

        if (!haveRole) {
            throw new MissingRolesException();
        }

        return true;
    }
}
