import * as fs from 'fs/promises';
import { Stats } from 'fs'; // Import Stats from the 'fs' module

const getFileStats = async (filePath: string): Promise<Stats> => {
    return await fs.stat(filePath); // fs.stat returns an object with file stats
};

export default getFileStats;
