import listFilesInDirectory from './listFilesInDirectory';
import * as path from 'path';

const findFilesByExtension = async (dirPath: string, ext: string): Promise<string[]> => {
    const files = await listFilesInDirectory(dirPath);
    return files.filter(file => path.extname(file) === ext);
};

export default findFilesByExtension;
