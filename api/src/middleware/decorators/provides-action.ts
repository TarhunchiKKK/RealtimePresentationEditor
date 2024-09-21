import { Reflector } from "@nestjs/core";
import { ActionsOnThePresentation } from "src/projects/enums/actions-on-the-presentation.enum";

export const ProvidesAction = Reflector.createDecorator<ActionsOnThePresentation>();
