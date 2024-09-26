import * as fs from 'fs';
import * as path from 'path';

const createStructure = (structure: string, basePath: string) => {
    const lines = structure.trim().split('\n');
    const folderTree = buildTree(lines);
    createFolders(folderTree, basePath);
};

const buildTree = (lines: string[], level: number = 0): any => {
    const tree: { [key: string]: any } = {};
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        const currentLevel = line.search(/\S/); // Find the leading spaces

        if (currentLevel < level) return tree; // Return if we've gone back up a level

        const folderName = trimmedLine.replace(/\/$/, ''); // Remove trailing slash for directories
        tree[folderName] = {};

        if (currentLevel === level) {
            continue; // This is a sibling
        } else if (currentLevel > level) {
            const subTree = buildTree(lines.slice(lines.indexOf(line) + 1), currentLevel);
            Object.assign(tree[folderName], subTree);
            break; // Move out of the loop since we're done with this branch
        }
    }
    return tree;
};

const createFolders = (structure: { [key: string]: any }, basePath: string) => {
    for (const [folderName, subStructure] of Object.entries(structure)) {
        const newPath = path.join(basePath, folderName);
        fs.mkdirSync(newPath, { recursive: true });

        if (Object.keys(subStructure).length === 0) {
            fs.writeFileSync(path.join(newPath, 'README.md'), `# ${folderName}\n\nThis folder is for ${folderName}.`);
        } else {
            createFolders(subStructure, newPath); // Recursively create subfolders
        }
    }
};

// Export the createStructure function as default
export default createStructure;