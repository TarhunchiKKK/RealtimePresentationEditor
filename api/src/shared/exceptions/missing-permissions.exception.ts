import { HttpException } from "@nestjs/common";

export class MissingPermissionsException extends HttpException {
    constructor() {
        super("Missing permissions.", 403);
    }
}
