import * as fs from 'fs';
import path = require("path");
import { exportFolderStructure, getDirectoryTree } from "../filesystem"
import parseFolderStructure from '../filesystem/utils/parseFolderStructure';
import gatherFileMetadata from '../filesystem/utils/gatherFileMetadata';
import getContentSize from '../filesystem/utils/getContentSize';
import standardizeFolderPath from '../filesystem/utils/standardizeFolderPath';


// console.log(JSON.stringify(fileStructure, null, 2)); // Print the structured result

const folderPath = 'C:\\suborno\\github\\ts-codecraft\\codecraft\\src\\filesystem'; // Change this to your target directory
// const directoryTree = getDirectoryTree(folderPath); // Get structure

// Write the structured result to a text file
// const outputPath = path.join(folderPath, 'directory_structure.txt'); // Path to output file
// fs.writeFileSync(outputPath, directoryTree.join('\n'), 'utf8'); // Write to file

// console.log(`Directory structure has been saved to: ${outputPath}`);

const folderStature = exportFolderStructure(folderPath)
// const pardesStature = gatherFileMetadata(folderPath, {
//     path: true,
//     name: true,
//     size: true,
//     created: true,
//     modified: true,
// })
// const contentSize = getContentSize({
//     type: "image",
//     content: "C:\\Users\\Skyranko\\Downloads\\JobsCareers-901568660.webp"
// })

// console.log(contentSize);

function main() {
    const paths = [
        "F:/some/path/to/file.txt",
        "F:\\some\\path\\to\\file.txt"
    ];

    // Convert to backslashes
    paths.forEach(path => {
        try {
            const standardized = standardizeFolderPath(path, { type: "toBackslash" });
            console.log(`Original: ${path} => Standardized (Backslash): ${standardized}`);
        } catch (error) {
            console.error(error);
        }
    });

    // Convert to forward slashes
    paths.forEach(path => {
        try {
            const standardized = standardizeFolderPath(path, { type: "toForwardSlash" });
            console.log(`Original: ${path} => Standardized (Forward Slash): ${standardized}`);
        } catch (error) {
            console.error(error);
        }
    });
}

main();