import { Controller, Get, UseGuards } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RequiredRoles } from "src/middleware/decorators/required-roles.decorator";
import { Roles } from "./enums/roles.enum";
import { RequiredRoleGuard } from "src/middleware/guards/required-roles.guard";
import { CheckPermissionsGuard } from "src/middleware/guards/check-permissions.guard";

@Controller("roles")
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    public getAvailableRoles() {
        return this.rolesService.getAvailableRoles();
    }

    @RequiredRoles([Roles.Owner, Roles.Editor])
    @UseGuards(RequiredRoleGuard, CheckPermissionsGuard)
    @Get("/test")
    public test() {
        return "Success";
    }
}
