import { Transform } from 'node:stream'

const transform = async () => {
    const reverseTransform = () => new Transform ({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        }
    })
    process.stdin.pipe(reverseTransform()).pipe(process.stdout);
};

await transform()