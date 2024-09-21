import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRoleOnPresentation } from "../entities/user-role-on-presentation.entity";
import { Repository } from "typeorm";
import { CreateUserRoleDto } from "../dto/create-user-role.dto";
import { UpdateUserRoleDto } from "../dto/update-user-role.dto";

@Injectable()
export class UserRolesService {
    constructor(
        @InjectRepository(UserRoleOnPresentation)
        private readonly rolesRepository: Repository<UserRoleOnPresentation>,
    ) {}

    public async create(createUserRoleDto: CreateUserRoleDto) {
        return await this.rolesRepository.save(createUserRoleDto);
    }

    public async findAll() {
        return await this.rolesRepository.find({
            relations: {
                user: true,
                presentation: true,
            },
        });
    }

    public async findOne(presentationId: string, userId: string) {
        return await this.rolesRepository.findOne({
            relations: {
                user: true,
                presentation: true,
            },
            where: {
                presentation: {
                    id: presentationId,
                },
                user: {
                    id: userId,
                },
            },
        });
    }

    public async update(updateUserRoleDto: UpdateUserRoleDto) {
        const userRole = await this.rolesRepository.findOne({
            relations: {
                user: true,
                presentation: true,
            },
            where: {
                presentation: {
                    id: updateUserRoleDto.presentation.id,
                },
                user: {
                    id: updateUserRoleDto.user.id,
                },
            },
        });

        if (!userRole) {
            throw new Error("Role not found.");
        }

        userRole.role = updateUserRoleDto.role;
        await this.rolesRepository.save(userRole);
    }

    public async remove(userRoleId: string) {
        await this.rolesRepository.delete(userRoleId);
    }
}
