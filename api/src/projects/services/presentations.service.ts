import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePresentationDto } from "../dto/create-presentation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Presentation } from "../entities/presentation.entity";
import { Repository } from "typeorm";

@Injectable()
export class PresentationsService {
    constructor(
        @InjectRepository(Presentation)
        private readonly presentationsRepository: Repository<Presentation>,
    ) {}

    public async create(createPresentationDto: CreatePresentationDto): Promise<Presentation> {
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

        return await this.presentationsRepository.save({
            title: createPresentationDto.title,
        });
    }

    public async findAll(page: number, count: number): Promise<Presentation[]> {
        return await this.presentationsRepository.find({
            relations: {
                slides: false,
            },
            skip: page * count,
            take: count,
        });
    }

    public async findOne(id: string) {
        const presentation = await this.presentationsRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                slides: true,
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

    public async getCount(perPage: number) {
        const presentationsCount = await this.presentationsRepository.count();
        return Math.ceil(presentationsCount / perPage);
    }
}
