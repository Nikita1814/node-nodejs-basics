import {access, readdir} from "node:fs"

const list = async () => {
    await access(
        'src/fs/files', 
        (err) => {
            if (err) {
                throw new Error ("FS operation failed")
            }
        }
    )
    
    await readdir('src/fs/files', {recursive: true}, (err, files) => {
        if (err) {
            throw new Error ("FS operation failed")
        }

        files.forEach(file => {
            console.log(file)
        });
    })
};

await list();