import { IUser } from "../../user";

export type TCreatePresentationQueryArgs = {
    title: string;

    user: Pick<IUser, "id">;
};
