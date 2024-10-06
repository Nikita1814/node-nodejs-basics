import { createReadStream, createWriteStream } from  "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream('src/zip/files/archive.gz')
    const result = createWriteStream('src/zip/files/fileToCompress2.txt')

    source.pipe(unzip).pipe(result)
};

await decompress();