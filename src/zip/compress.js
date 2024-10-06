import { createReadStream, createWriteStream } from  "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
    const zip = createGzip();
    const source = createReadStream('src/zip/files/fileToCompress.txt')
    const result = createWriteStream('src/zip/files/archive.gz')

    source.pipe(zip).pipe(result)

};

await compress();