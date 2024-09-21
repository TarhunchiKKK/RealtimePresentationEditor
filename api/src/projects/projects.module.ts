import { Module } from "@nestjs/common";
import { PresentationsService } from "./services/presentations.service";
import { ProjectsController } from "./projects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Presentation } from "./entities/presentation.entity";
import { Slide } from "./entities/slide.entity";
import { UserRoleOnPresentation } from "./entities/user-role-on-presentation.entity";
import { SlidesService } from "./services/slides.service";
import { UserRolesService } from "./services/user-roles.service";
import { RolesModule } from "src/roles/roles.module";

@Module({
    imports: [RolesModule, TypeOrmModule.forFeature([Presentation, Slide, UserRoleOnPresentation])],
    controllers: [ProjectsController],
    providers: [PresentationsService, SlidesService, UserRolesService],
})
export class ProjectsModule {}
