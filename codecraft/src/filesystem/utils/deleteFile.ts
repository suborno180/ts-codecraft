import * as fs from 'fs/promises';

const deleteFile = async (filePath: string): Promise<void> => {
    await fs.unlink(filePath);
};

export default deleteFile; // Make sure this line exists
