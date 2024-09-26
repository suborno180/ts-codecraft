import * as path from 'path';

const getFileExtension = (filePath: string): string => {
    return path.extname(filePath);
};

export default getFileExtension;
