import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { User } from "./users/entities/user.entity";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { StaticFilesDir } from "./shared/constants/files";
import { RolesModule } from "./roles/roles.module";
import { PresentationsModule } from "./presentations/presentations.module";
import * as path from "path";
import { Presentation } from "./presentations/entities/presentation.entity";
import { Slide } from "./presentations/entities/slide.entity";
import { UserRoleOnPresentation } from "./presentations/entities/user-role-on-presentation.entity";

@Module({
    imports: [
        UsersModule,
        FilesModule,
        RolesModule,
        PresentationsModule,
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
                entities: [User, Presentation, Slide, UserRoleOnPresentation],
            }),
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, StaticFilesDir),
            exclude: ["/api/(.*)"],
        }),
    ],
    controllers: [AppController],
})
export class AppModule {}
