import { Injectable, NotFoundException } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { FilesService } from "src/files/files.service";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private readonly filesService: FilesService,
    ) {}

    public async login(loginDto: LoginDto, avatar?: Express.Multer.File): Promise<User> {
        const user = await this.usersRepository.findOne({
            where: {
                nickname: loginDto.nickname,
            },
        });

        const avatarFilename = avatar ? await this.filesService.create(avatar) : null;

        if (user) {
            await this.usersRepository.update(user.id, { avatar: avatarFilename });
            return { ...user, avatar: avatarFilename };
        }

        return await this.usersRepository.save({ ...loginDto, avatar: avatarFilename });
    }

    public async findAll() {
        return await this.usersRepository.find();
    }

    public async findOne(userId: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new NotFoundException("User not found.");
        }

        return user;
    }
}
