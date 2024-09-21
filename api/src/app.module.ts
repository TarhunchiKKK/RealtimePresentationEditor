import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { User } from "./users/entities/user.entity";
import { FilesModule } from "./files/files.module";

@Module({
    imports: [
        UsersModule,
        FilesModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("DB_HOST"),
                port: +configService.get("DB_PORT"),
                username: configService.get("DB_USER"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_NAME"),
                synchronize: true,
                entities: [User],
            }),
        }),
    ],
    controllers: [AppController],
})
export class AppModule {}
