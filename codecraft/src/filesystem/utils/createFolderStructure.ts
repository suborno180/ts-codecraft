import * as fs from 'fs';
import * as path from 'path';

// Define the FileStructure interface
export interface FileStructure {
    [key: string]: FileStructure | string;
}


// Function to create folder structure from the parsed object
const createFolderStructure = (structure: FileStructure, basePath: string): void => {
    for (const key in structure) {
        const currentPath = path.join(basePath, key);

        if (typeof structure[key] === 'object') {
            // Create directory
            fs.mkdirSync(currentPath, { recursive: true });
            // Recursively create the structure inside this directory
            createFolderStructure(structure[key] as FileStructure, currentPath);
        } else {
            // Create file
            fs.writeFileSync(currentPath, ''); // Create an empty file
        }
    }
};

export default createFolderStructure;