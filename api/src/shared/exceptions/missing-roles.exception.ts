import { HttpException } from "@nestjs/common";

export class MissingRolesException extends HttpException {
    constructor() {
        super("Missing required roles", 403);
    }
}
