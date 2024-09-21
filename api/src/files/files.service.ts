import { Injectable } from "@nestjs/common";
import { generateFilename } from "./helpers/generate-filename.helper";
import { StaticFilesDir } from "src/shared/constants/files";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class FilesService {
    public async create(file: Express.Multer.File) {
        const filename = generateFilename(file.originalname);
        const filepath = path.resolve(__dirname, "..", StaticFilesDir);

        if (!fs.existsSync(filepath)) {
            fs.mkdirSync(filepath, { recursive: true });
        }

        const fullPath = path.join(filepath, filename);
        fs.writeFileSync(fullPath, file.buffer);
        return filename;
    }
}
