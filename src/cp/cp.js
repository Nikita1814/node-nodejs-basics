import {spawn, fork} from 'node:child_process';

const spawnChildProcess = async (args) => {
    const spawnedProcess = spawn('node', ['./src/cp/files/script.js', ...args]);
    
    process.stdin.pipe(spawnedProcess.stdin)
    spawnedProcess.stdout.on("data", (data) => {
        console.log(data.toString())
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Hello', 'is', 'it', 'me', 'you', 'are', 'looking', 'for']);
