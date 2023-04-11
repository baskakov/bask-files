const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls(path: string): Promise<string[]> {
    let response: string[] = [];

    if (path) {
        const { stdout } = await exec(`ls ${path}`).catch(() => {
            return {};
        });

        if (stdout) response = stdout.split('\n').filter((x: string) => x !== '');
    }

    return response;
}

async function cat(path: string): Promise<string> {
    let response: string = '';

    if (path) {
        const { stdout } = await exec(`cat ${path}`).catch(() => {
            return {};
        });

        if (stdout) response = stdout;
    }

    return response;
}

export { ls, cat };
