import process from 'node:process';
const parseEnv = () => {
    console.log(process.env)
    const regexToMatch = /^RSS_.*/
    Object.entries(process.env).map( variable => {
        if (regexToMatch.test(variable[0])){
            console.log(`${variable[0]}=${variable[1]}`)
        }
    })
};

parseEnv();