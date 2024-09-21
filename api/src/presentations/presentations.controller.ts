import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { PresentationsService } from "./presentations.service";
import { CreatePresentationDto } from "./dto/create-presentation.dto";

@Controller("presentations")
export class PresentationsController {
    constructor(private readonly presentationsService: PresentationsService) {}

    @Post()
    create(@Body() createPresentationDto: CreatePresentationDto) {
        return this.presentationsService.createPresentation(createPresentationDto);
    }

    @Get()
    findAll() {
        return this.presentationsService.findAll();
    }

    @Get(":id")
    findOneById(@Param("id") id: string) {
        return this.presentationsService.findOneById(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.presentationsService.remove(id);
    }
}
