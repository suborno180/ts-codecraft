import * as fs from 'fs';
import * as path from 'path';

// Define the FileStructure interface
export interface FileStructure {
    [key: string]: FileStructure | string;
}

// Function to parse the folder structure from text representation
const parseFolderStructure = (input: string): FileStructure => {
    const lines = input.split('\n');
    const root: FileStructure = {};
    const stack: { parent: FileStructure; level: number }[] = [{ parent: root, level: -1 }];

    lines.forEach(line => {
        const level = line.search(/\S/); // Find the leading spaces
        const trimmedLine = line.trim();
        
        if (trimmedLine) {
            const current = trimmedLine.endsWith('/') ? trimmedLine.slice(0, -1) : trimmedLine;
            const item: FileStructure | string = trimmedLine.endsWith('/') ? {} as FileStructure : current; // Initialize correctly

            // Adjust the stack based on the level of indentation
            while (stack.length > 0 && stack[stack.length - 1].level >= level) {
                stack.pop();
            }

            if (stack.length > 0) {
                stack[stack.length - 1].parent[current] = item;
            }

            if (typeof item === 'object') {
                stack.push({ parent: item as FileStructure, level });
            }
        }
    });

    return root;
};

export default parseFolderStructure;