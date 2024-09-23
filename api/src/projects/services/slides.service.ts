import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Slide } from "../entities/slide.entity";
import { Repository } from "typeorm";
import { CreateSlideDto } from "../dto/create-slide.dto";
import { SaveSlideDto } from "../dto/save-slide.dto";

@Injectable()
export class SlidesService {
    constructor(
        @InjectRepository(Slide)
        private readonly slidesRepository: Repository<Slide>,
    ) {}

    public async create(createSlideDto: CreateSlideDto) {
        return await this.slidesRepository.save(createSlideDto);
    }

    public async save(saveSlideDto: SaveSlideDto) {
        const slide = await this.slidesRepository.findOne({
            where: {
                id: saveSlideDto.id,
            },
        });

        if (!slide) {
            throw new NotFoundException("Slide not found.");
        }

        const elements = saveSlideDto.elements.map((el) => JSON.stringify(el));

        await this.slidesRepository.save({
            id: slide.id,
            elements: elements,
        });
    }

    public async remove(slideId: string) {
        await this.slidesRepository.delete(slideId);
    }
}
