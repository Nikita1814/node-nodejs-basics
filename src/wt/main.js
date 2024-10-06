import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
   const cores = cpus().length;
   const res = [];
    for ( let i = 0; i < cores; i++ ) {
        const processPromise = new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js',{workerData: {num: 10 + i}})

            worker.on("message", (result) => {
                resolve({ status: "resolved", result: result });
            });
        
            worker.on("error", (msg) => {
                resolve({ status: "error", result: null});
            });            
        });

        res.push(processPromise);
    }

    const finalRes = await Promise.all(res);
    console.log(finalRes);
};

await performCalculations();