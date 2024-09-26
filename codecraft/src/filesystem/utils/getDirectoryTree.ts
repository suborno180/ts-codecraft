import * as fs from 'fs';
import * as path from 'path';

const getDirectoryTree = (folderPath: string, indent: string = ''): string[] => {
    const items = fs.readdirSync(folderPath);
    const output: string[] = [];

    items.forEach(item => {
        const fullPath = path.join(folderPath, item);
        output.push(`${indent}├── ${item}`); // Add current item to output

        if (fs.statSync(fullPath).isDirectory()) {
            // Recursively get structure for subdirectories
            output.push(...getDirectoryTree(fullPath, `${indent}│   `));
        }
    });

    return output; // Return the complete string representation
};

// Usage example

export default getDirectoryTree;
