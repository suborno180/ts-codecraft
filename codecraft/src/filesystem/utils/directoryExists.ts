import * as fs from 'fs/promises';

const directoryExists = async (dirPath: string): Promise<boolean> => {
    try {
        const stats = await fs.stat(dirPath);
        return stats.isDirectory();
    } catch {
        return false;
    }
};

export default directoryExists;
