import {createWriteStream} from "node:fs"

const write = async () => {
    const writeStream = createWriteStream('src/streams/files/fileToWrite.txt')
    process.stdin.on('data' , (data) => {
        writeStream.write(data)
    })
};

await write();