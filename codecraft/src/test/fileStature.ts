import * as fs from 'fs';
import path = require("path");
import { exportFolderStructure, getDirectoryTree } from "../filesystem"
import parseFolderStructure from '../filesystem/utils/parseFolderStructure';
import gatherFileMetadata from '../filesystem/utils/gatherFileMetadata';
import getContentSize from '../filesystem/utils/getContentSize';
import standardizeFolderPath from '../filesystem/utils/standardizeFolderPath';


// console.log(JSON.stringify(fileStructure, null, 2)); // Print the structured result

const folderPath = 'E:\\github\\packege\\codecraft\\src\\date-utils'; // Change this to your target directory
// const directoryTree = getDirectoryTree(folderPath); // Get structure

// Write the structured result to a text file
// const outputPath = path.join(folderPath, 'directory_structure.txt'); // Path to output file
// fs.writeFileSync(outputPath, directoryTree.join('\n'), 'utf8'); // Write to file

// console.log(`Directory structure has been saved to: ${outputPath}`);

const folderStature = getDirectoryTree(folderPath)

const metaData = gatherFileMetadata(folderPath, {
    path: true,
    name: true,
    content: true
})

console.log(metaData);
