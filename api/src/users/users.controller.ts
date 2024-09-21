import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from "@nestjs/common";
import { UsersService } from "./users.service";
import { LoginDto } from "./dto/login.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UseInterceptors(FileInterceptor("avatar"))
    public async login(@Body() loginDto: LoginDto, @UploadedFile() avatar?: Express.Multer.File) {
        return this.usersService.login(loginDto, avatar);
    }

    @Get()
    public async findAll() {
        return this.usersService.findAll();
    }

    @Get(":id")
    public async findOne(@Param("id") id: string) {
        return this.usersService.findOne(id);
    }
}
