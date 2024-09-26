import * as fs from 'fs/promises';
import * as path from 'path';

const readDirectoryRecursively = async (dirPath: string): Promise<string[]> => {
    let results: string[] = [];
    const list = await fs.readdir(dirPath, { withFileTypes: true });

    for (const dirent of list) {
        const res = path.resolve(dirPath, dirent.name);
        if (dirent.isDirectory()) {
            results = results.concat(await readDirectoryRecursively(res)); // recurse
        } else {
            results.push(res);
        }
    }

    return results;
};

export default readDirectoryRecursively;
