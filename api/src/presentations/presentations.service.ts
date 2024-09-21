import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePresentationDto } from "./dto/create-presentation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Presentation } from "./entities/presentation.entity";
import { Repository } from "typeorm";
import { UserRoleOnPresentation } from "./entities/user-role-on-presentation.entity";
import { Roles } from "src/roles/enums/roles.enum";

@Injectable()
export class PresentationsService {
    constructor(
        @InjectRepository(Presentation)
        private readonly presentationsRepository: Repository<Presentation>,

        @InjectRepository(UserRoleOnPresentation)
        private readonly userRolesRepository: Repository<UserRoleOnPresentation>,
    ) {}

    public async createPresentation(
        createPresentationDto: CreatePresentationDto,
    ): Promise<Presentation> {
        const existPreseentation = await this.presentationsRepository.findOne({
            where: {
                title: createPresentationDto.title,
            },
        });

        if (existPreseentation) {
            throw new BadRequestException(
                `Presentation ${createPresentationDto.title} already exists.`,
            );
        }

        const presentation = await this.presentationsRepository.save({
            title: createPresentationDto.title,
        });

        await this.userRolesRepository.save({
            presentation: presentation,
            user: createPresentationDto.user,
            role: Roles.Owner,
        });

        return presentation;
    }

    public async findAll(): Promise<Presentation[]> {
        return await this.presentationsRepository.find({
            relations: {
                slides: false,
            },
        });
    }

    public async findOneById(id: string) {
        const presentation = await this.presentationsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!presentation) {
            throw new NotFoundException("Requested presentation not exist.");
        }

        return presentation;
    }

    public async remove(id: string) {
        await this.presentationsRepository.delete(id);
    }
}
