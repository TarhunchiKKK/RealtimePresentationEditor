import { generate } from "randomstring";
import { FilenameLength } from "src/shared/constants/files";
import { getFileExtension } from "./get-file-extension";

export { generate } from "randomstring";

export function generateFilename(originalName: string) {
    const filename = generate({ charset: "alphanumeric", length: FilenameLength });
    const extension = getFileExtension(originalName);
    return filename + extension;
}
