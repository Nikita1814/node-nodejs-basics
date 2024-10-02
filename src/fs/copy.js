import {access, cp} from "node:fs"

const copy = async () => {
    // checkinng that files folder exists 
    await access(
        'src/fs/files', 
        (err) => {
            if (err) {
                throw new Error ("FS operation failed")
            }
        }
    )
    // checking if copy exists and creating it in case it does not
    await access (
        'src/fs/files_copy',
        async (err) => {
            if (err) {
                await cp(
                    'src/fs/files', 
                    'src/fs/files_copy', 
                    {recursive: true}, 
                    (err) => {}
                )  
            } else {
                throw new Error("FS operation failed")  
            }
        }
    )

};

await copy();
