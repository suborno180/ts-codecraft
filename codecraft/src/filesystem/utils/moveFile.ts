import * as fs from 'fs/promises';

const moveFile = async (source: string, destination: string): Promise<void> => {
    await fs.rename(source, destination);
};

export default moveFile;
