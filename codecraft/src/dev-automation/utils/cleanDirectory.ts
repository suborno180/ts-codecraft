import * as fs from 'fs/promises';
import * as path from 'path';

const cleanDirectory = async (dirPath: string): Promise<void> => {
    const files = await fs.readdir(dirPath);
    await Promise.all(files.map(file => fs.unlink(path.join(dirPath, file))));
};

export default cleanDirectory;
