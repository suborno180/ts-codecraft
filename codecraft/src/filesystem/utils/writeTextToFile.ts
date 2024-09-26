import * as fs from 'fs/promises';

const writeTextToFile = async (filePath: string, data: string): Promise<void> => {
    await fs.writeFile(filePath, data, 'utf-8');
};

export default writeTextToFile;
