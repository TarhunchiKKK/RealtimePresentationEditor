import { Roles } from "../enums/roles.enum";

export class RolePair {
    title: string;

    role: Roles;

    constructor(title: string, role: Roles) {
        this.title = title;
        this.role = role;
    }
}
