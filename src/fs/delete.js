import {access, rm} from 'node:fs'

const remove = async () => {
    // Write your code here 
    await access(
        'src/fs/files/fileToRemove.txt', 
        async (err) => {
            if (err) {
                throw new Error ("FS operation failed")
            } else {
                await rm('src/fs/files/fileToRemove.txt', (err) => {})
            }
        }
    )
};

await remove();