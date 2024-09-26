import * as fs from 'fs/promises';
import * as path from 'path';

const listFilesInDirectory = async (dirPath: string): Promise<string[]> => {
    const files = await fs.readdir(dirPath);
    return files.map(file => path.join(dirPath, file));
};

export default listFilesInDirectory;
