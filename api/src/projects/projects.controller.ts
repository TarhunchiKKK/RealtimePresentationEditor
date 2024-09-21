import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { PresentationsService } from "./services/presentations.service";
import { CreatePresentationDto } from "./dto/create-presentation.dto";
import { SlidesService } from "./services/slides.service";
import { UserRolesService } from "./services/user-roles.service";
import { Roles } from "src/roles/enums/roles.enum";
import { CreateSlideDto } from "./dto/create-slide.dto";
import { CreateUserRoleDto } from "./dto/create-user-role.dto";
import { UpdateUserRoleDto } from "./dto/update-user-role.dto";

@Controller("projects")
export class ProjectsController {
    constructor(
        private readonly presentationsService: PresentationsService,
        private readonly slidesService: SlidesService,
        private readonly userRolesService: UserRolesService,
    ) {}

    /*----------------------------------Presentations-------------------------------------------*/

    @Post("/presentations")
    public async createPresentation(@Body() createPresentationDto: CreatePresentationDto) {
        const presentation = await this.presentationsService.create(createPresentationDto);

        await this.userRolesService.create({
            presentation: presentation,
            user: createPresentationDto.user,
            role: Roles.Owner,
        });

        await this.slidesService.create({
            presentation: presentation,
        });

        return presentation;
    }

    @Get("/presentations")
    public async findAllPresentations() {
        return await this.presentationsService.findAll();
    }

    @Get("/presentations/:id")
    public async findOnePresentation(@Param("id") presentationId: string) {
        return await this.presentationsService.findOne(presentationId);
    }

    @Delete("/presentations/:id")
    public async removePresentation(@Param("id") presentationId: string) {
        return await this.presentationsService.remove(presentationId);
    }

    /*----------------------------------Slides-------------------------------------------*/

    @Post("/slides")
    public async createSlide(@Body() createSlideDto: CreateSlideDto) {
        return await this.slidesService.create(createSlideDto);
    }

    @Delete("/slides/:id")
    public async removeSlide(@Param("id") slideId: string) {
        return await this.slidesService.remove(slideId);
    }

    /*----------------------------------User Roles-------------------------------------------*/

    @Post("/roles")
    public async createUserRole(@Body() createUserRoleDto: CreateUserRoleDto) {
        return await this.userRolesService.create(createUserRoleDto);
    }

    @Get("/roles")
    public async findAllUserRoles() {
        return await this.userRolesService.findAll();
    }

    @Put("/roles")
    public async updateUserRole(@Body() updateUserRoleDto: UpdateUserRoleDto) {
        return await this.userRolesService.update(updateUserRoleDto);
    }

    @Delete("/roles/:id")
    public async removeUserRole(@Param("id") userRoleId: string) {
        return await this.userRolesService.remove(userRoleId);
    }
}
