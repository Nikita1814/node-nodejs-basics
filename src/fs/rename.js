import {access} from "node:fs";
import {rename as fsRename} from "node:fs" 

const rename = async () => {
    // checking if the file is missing
    await access(
        'src/fs/files/wrongFilename.txt', 
        (err) => {
            if (err) {
                throw new Error ("FS operation failed")
            } 
        }
    )
    //checking if the renamed file already exists
    await access(
        'src/fs/files/properFilename.md', 
        async (err) => {
            if (err) {
                await fsRename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', () => {})
            } else {
                throw new Error ("FS operation failed")
            }
        }
    )

};

await rename();