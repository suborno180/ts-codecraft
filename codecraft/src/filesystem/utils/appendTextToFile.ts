import * as fs from 'fs/promises';

const appendTextToFile = async (filePath: string, data: string): Promise<void> => {
    await fs.appendFile(filePath, data, 'utf-8');
};

export default appendTextToFile;
