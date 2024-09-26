import * as fs from 'fs/promises';

const readFileAsText = async (filePath: string): Promise<string> => {
    return await fs.readFile(filePath, 'utf-8');
};

export default readFileAsText;
