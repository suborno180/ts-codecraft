import * as fs from 'fs/promises';
import * as path from 'path';

const backupFiles = async (sourceDir: string, backupDir: string): Promise<void> => {
    const files = await fs.readdir(sourceDir);
    await Promise.all(files.map(file => 
        fs.copyFile(path.join(sourceDir, file), path.join(backupDir, file))
    ));
};

export default backupFiles;
