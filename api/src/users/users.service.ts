import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    public async login(loginDto: LoginDto) {
        try {
            const user = await this.usersRepository.findOne({
                where: {
                    nickname: loginDto.nickname,
                },
            });

            if (!user) {
                return await this.usersRepository.save({ ...loginDto });
            }

            return user;
        } catch (error: unknown) {
            console.log(error);
            throw new BadRequestException("Error via login.");
        }
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
