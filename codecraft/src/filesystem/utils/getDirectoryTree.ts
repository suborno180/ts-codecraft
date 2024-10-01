import * as fs from 'fs';
import * as path from 'path';

// Define the options interface
interface Options {
    enableRealtime?: boolean; // Enable real-time logging
    maxDepth?: number;        // Maximum depth for traversal
    ignore?: string[];        // Array of files or directories to ignore
    outputPath?: string;      // File path to save output if not logging in real-time
    includeRoot?: boolean;    // Include the folder name in the output
}

// Define a type for the output
type DirectoryTree = string[];

const getDirectoryTree = (
    folderPath: string,
    indent: string = '',
    options: Options = {},
    currentDepth: number = 0
): DirectoryTree => {
    // Check if the provided path is a valid directory
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
        console.error(`Invalid directory path: ${folderPath}`);
        return []; // Return an empty array for invalid paths
    }

    const { enableRealtime = false, maxDepth = Infinity, ignore = [], outputPath, includeRoot = false } = options; // Destructure with defaults
    const items = fs.readdirSync(folderPath);
    const output: DirectoryTree = [];

    // Include the folder name if specified
    if (currentDepth === 0 && includeRoot) {
        const rootLine = `${indent}${path.basename(folderPath)}`; // Get the base name of the root folder
        if (enableRealtime) {
            console.log(rootLine);
            if (outputPath) {
                fs.appendFileSync(outputPath, rootLine + '\n', 'utf8'); // Append root line to output file
            }
        } else {
            output.push(rootLine); // Add root directory to output
        }
    }

    if (currentDepth >= maxDepth) {
        return output; // Stop recursion if max depth is reached
    }

    items.forEach(item => {
        if (ignore.includes(item)) {
            return; // Skip this item if it's in the ignore list
        }

        const fullPath = path.join(folderPath, item);
        const line = `${indent}├── ${item}`;
        
        if (enableRealtime) {
            console.log(line); // Log the line immediately if enableRealtime is true
            // Also write to file if outputPath is provided
            if (outputPath) {
                fs.appendFileSync(outputPath, line + '\n', 'utf8'); // Append to the output file
            }
        } else {
            output.push(line); // Add current item to output
        }

        if (fs.statSync(fullPath).isDirectory()) {
            // Recursively get structure for subdirectories
            const subTree = getDirectoryTree(fullPath, `${indent}│   `, options, currentDepth + 1);
            output.push(...subTree); // Always append subTree regardless of enableRealtime
        }
    });

    return output; // Return output array
};

// Usage example
/*
const folderPath = 'C:\\path\\to\\your\\directory'; // Specify the starting directory path
const options = {
    enableRealtime: false, // Disable real-time logging
    maxDepth: 2,           // Set maximum depth for traversal
    ignore: [],            // No files/directories to ignore
    outputPath: 'C:\\path\\to\\your\\output.txt', // Specify output file path
    includeRoot: true,     // Include the folder name
};

const directoryStructure = getDirectoryTree(folderPath, '', options);
console.log(directoryStructure);
*/

export default getDirectoryTree;
