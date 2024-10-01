import * as fs from 'fs';
import * as path from 'path';
import { getDirectoryTree } from "../filesystem"; // Assuming this is where getDirectoryTree is defined
import parseFolderStructure from '../filesystem/utils/parseFolderStructure';
import gatherFileMetadata from '../filesystem/utils/gatherFileMetadata';
import getContentSize from '../filesystem/utils/getContentSize';
import standardizeFolderPath from '../filesystem/utils/standardizeFolderPath';

// console.log(JSON.stringify(fileStructure, null, 2)); // Print the structured result

const folderPath = 'C:\\suborno\\ts-codecraft\\codecraft\\src'; // Change this to your target directory
const outerfolderPath = 'C:\\suborno\\ts-codecraft\\codecraft\\src\\test'; // Change this to your target directory

try {
    // Get directory structure
    const directoryTree = getDirectoryTree(folderPath, '', { enableRealtime: false, ignore: ['gol', 'aimodel'], includeRoot: true }) as string[]; // Ensure it's treated as a string array

    // Write the structured result to a text file
    const outputPath = path.join(outerfolderPath, 'directory_structure.txt'); // Path to output file
    fs.writeFileSync(outputPath, directoryTree.join('\n'), 'utf8'); // Write to file

    console.log(`Directory structure has been saved to: ${outputPath}`);

    const folderStature = getDirectoryTree(folderPath); // You may want to use this later

    // Optional: Gather file metadata
    // const metaData = gatherFileMetadata(folderPath, {
    //     path: true,
    //     name: true,
    //     content: true
    // });

    // Uncomment this line to print file metadata to console
    // console.log(JSON.stringify(metaData, null, 2)); // Pretty print the metadata

    console.log(directoryTree);
} catch (error) {
    console.error(`An error occurred: ${(error as Error).message}`);
}
