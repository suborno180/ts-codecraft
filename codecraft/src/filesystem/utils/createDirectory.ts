import * as fs from 'fs/promises';

const createDirectory = async (dirPath: string): Promise<void> => {
    await fs.mkdir(dirPath, { recursive: true });
};

export default createDirectory;
