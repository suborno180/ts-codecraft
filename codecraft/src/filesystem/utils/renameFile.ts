import * as fs from 'fs/promises';

const renameFile = async (oldPath: string, newPath: string): Promise<void> => {
    await fs.rename(oldPath, newPath);
};

export default renameFile;
