import { User } from "src/users/entities/user.entity";

export class CreatePresentationDto {
    title: string;

    user: Pick<User, "id">;
}
