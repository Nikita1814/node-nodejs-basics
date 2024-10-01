import {writeFile, access} from "node:fs"

const create = async () => {
    const text = "I am fresh and young";
    await access(
        'src/fs/files/fresh.txt', 
        async (err) => {
            if (err) {
                await writeFile('src/fs/files/fresh.txt', text, (err) => {})
            } else {
                throw new Error('FS operation failed');
             }
        }
    );
};

await create();