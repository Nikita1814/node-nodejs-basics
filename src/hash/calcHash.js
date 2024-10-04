import {createHash} from "node:crypto"
import { createReadStream } from "node:fs";

const calculateHash = async () => {
    const hash = createHash('sha256')
    const readStream = createReadStream('src/hash/files/fileToCalculateHashFor.txt')
    readStream.on('readable', () => {
        const data = readStream.read()
        if(data) {
            console.log(hash.update(data).digest('hex'));
        }
    })
};

await calculateHash();