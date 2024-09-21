import { Reflector } from "@nestjs/core";
import { Roles } from "src/roles/enums/roles.enum";

export const RequiredRoles = Reflector.createDecorator<Roles[]>();
