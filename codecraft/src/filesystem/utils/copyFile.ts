import * as fs from 'fs/promises';

const copyFile = async (source: string, destination: string): Promise<void> => {
    await fs.copyFile(source, destination);
};

export default copyFile;
