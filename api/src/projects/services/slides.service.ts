import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Slide } from "../entities/slide.entity";
import { Repository } from "typeorm";
import { CreateSlideDto } from "../dto/create-slide.dto";

@Injectable()
export class SlidesService {
    constructor(
        @InjectRepository(Slide)
        private readonly slidesRepository: Repository<Slide>,
    ) {}

    public async create(createSlideDto: CreateSlideDto) {
        return await this.slidesRepository.save(createSlideDto);
    }

    public async remove(slideId: string) {
        await this.slidesRepository.delete(slideId);
    }
}
