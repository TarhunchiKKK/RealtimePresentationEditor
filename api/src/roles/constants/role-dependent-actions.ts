import { ActionsOnThePresentation } from "src/presentations/enums/actions-on-the-presentation.enum";
import { Roles } from "../enums/roles.enum";

export const RoleDependentActions: Record<Roles, ActionsOnThePresentation[]> = {
    [Roles.Owner]: [
        ActionsOnThePresentation.CreatePresentation,
        ActionsOnThePresentation.CreateSlide,
        ActionsOnThePresentation.RemoveSlide,
        ActionsOnThePresentation.ViewUsers,
        ActionsOnThePresentation.ChangeUserRole,
        ActionsOnThePresentation.EditPresentation,
        ActionsOnThePresentation.ViewPresentation,
        ActionsOnThePresentation.JoinToPresentation,
    ],
    [Roles.Editor]: [
        ActionsOnThePresentation.EditPresentation,
        ActionsOnThePresentation.ViewPresentation,
        ActionsOnThePresentation.JoinToPresentation,
    ],
    [Roles.Viewer]: [
        ActionsOnThePresentation.ViewPresentation,
        ActionsOnThePresentation.JoinToPresentation,
    ],
    [Roles.Guest]: [ActionsOnThePresentation.JoinToPresentation],
};
