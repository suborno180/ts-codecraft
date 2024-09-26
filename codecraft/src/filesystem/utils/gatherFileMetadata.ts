import * as fs from 'fs';
import * as path from 'path';

// Define the options type
interface GatherFileMetadataOptions {
    path?: boolean;
    name?: boolean;
    content?: boolean; // Optional content field
    size?: boolean; // File size in KB
    created?: boolean; // Creation date
    modified?: boolean; // Modification date
}

// Gathers file metadata based on user-selected criteria
function gatherFileMetadata(directory: string, options: GatherFileMetadataOptions): object[] {
    const results: object[] = [];
    const baseDirectory = path.resolve(directory); // Resolve the absolute path of the base directory
    const lastFolderName = path.basename(baseDirectory); // Get the last folder name

    // Helper function to recursively read directories
    function readDirectory(dir: string) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                // If the item is a directory, recurse into it
                readDirectory(filePath);
            } else {
                const fileData: any = {}; // Prepare file data object

                // Include attributes based on user options
                if (options.name) {
                    fileData.name = file;
                }
                if (options.path) {
                    fileData.path = path.join(lastFolderName, path.relative(baseDirectory, filePath)).replace(/\\/g, '/'); // Relative path
                }
                if (options.content) {
                    fileData.content = fs.readFileSync(filePath, 'utf-8'); // Read file content
                }
                if (options.size) {
                    fileData.size = `${(stats.size / 1024).toFixed(2)} KB`; // Size in KB with unit
                }
                if (options.created) {
                    fileData.created = stats.birthtime; // Creation date
                }
                if (options.modified) {
                    fileData.modified = stats.mtime; // Last modification date
                }

                // Push only if at least one property is included
                if (Object.keys(fileData).length > 0) {
                    results.push(fileData);
                }
            }
        });
    }

    readDirectory(directory);
    return results;
}

export default gatherFileMetadata;
