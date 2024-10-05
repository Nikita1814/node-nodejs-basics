import { createReadStream } from "node:fs";

const read = async () => {
    const readStream = await createReadStream('src/streams/files/fileToRead.txt')
    readStream.on('data', (data) => {
        if (data) {
            process.stdout.write(data)
        }
    })
};

await read();