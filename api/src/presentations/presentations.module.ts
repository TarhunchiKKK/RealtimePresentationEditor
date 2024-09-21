import { Module } from "@nestjs/common";
import { PresentationsService } from "./presentations.service";
import { PresentationsController } from "./presentations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Presentation } from "./entities/presentation.entity";
import { Slide } from "./entities/slide.entity";
import { UserRoleOnPresentation } from "./entities/user-role-on-presentation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Presentation, Slide, UserRoleOnPresentation])],
    controllers: [PresentationsController],
    providers: [PresentationsService],
})
export class PresentationsModule {}
