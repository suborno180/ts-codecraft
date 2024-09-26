import * as fs from 'fs';
import * as path from 'path';

/**
 * Serializes the directory structure starting from the given base path
 * into a string format representing the folder hierarchy.
 *
 * @param basePath - The starting path for serialization.
 * @param level - The current indentation level (used for recursion).
 * @returns A string representation of the folder structure.
 */
const exportFolderStructure = (basePath: string, level: number = 0): string => {
    let result = '';
    
    try {
        const items = fs.readdirSync(basePath);

        items.forEach(item => {
            const itemPath = path.join(basePath, item);

            try {
                const stats = fs.statSync(itemPath);

                // Indentation based on the level
                const indentation = '    '.repeat(level);

                if (stats.isDirectory()) {
                    result += `${indentation}${item}/\n`; // Add trailing slash for directories
                    // Recursively call for subdirectories
                    result += exportFolderStructure(itemPath, level + 1);
                } else {
                    result += `${indentation}${item}\n`; // Just add the file name
                }
            } catch (error) {
                console.warn(`Skipping ${itemPath}: ${(error as Error).message}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${basePath}: ${(error as Error).message}`);
    }

    return result;
};

// Usage example (you can modify or comment this out)
const outputPath = process.argv[2] || 'C:\\suborno\\'; // Use provided path or current directory
const folderStructureString = exportFolderStructure(outputPath);
console.log('Exported folder structure:\n', folderStructureString);

export default exportFolderStructure; // Optional: export the function for use in other files
