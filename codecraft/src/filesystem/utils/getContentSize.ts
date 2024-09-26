import * as fs from 'fs';
import axios from 'axios';

// Define the options type
interface GetContentSizeOptions {
    type: "text" | "image" | "video" | "url";
    content: string;
}

// Function to get the size of various content types
async function getContentSize(options: GetContentSizeOptions): Promise<string> {
    switch (options.type) {
        case "text":
            return `${Buffer.byteLength(options.content, 'utf8')} bytes`; // Size of text content in bytes

        case "image":
        case "video":
            const normalizedContent = options.content.replace(/\\/g, '/'); // Normalize backslashes

            // Handle file URLs (file://)
            if (normalizedContent.startsWith('file:///')) {
                const filePath = decodeURI(normalizedContent.replace('file:///', ''));
                return getLocalFileSize(filePath);
            }
            // Handle Windows-style paths (any drive)
            else if (/^[A-Z]:\/.*/.test(normalizedContent)) {
                return getLocalFileSize(normalizedContent);
            }
            // Handle URLs
            else if (normalizedContent.startsWith('http://') || normalizedContent.startsWith('https://')) {
                return await getUrlSize(normalizedContent);
            }
            // Invalid format
            else {
                throw new Error("Invalid file path or URL.");
            }

        case "url":
            return await getUrlSize(options.content);

        default:
            throw new Error("Unsupported content type.");
    }
}

// Function to get local file size
function getLocalFileSize(filePath: string): string {
    try {
        const stats = fs.statSync(filePath);
        return `${(stats.size / 1024).toFixed(2)} KB`; // Size in KB
    } catch (error) {
        throw new Error("File not found or inaccessible.");
    }
}

// Function to get URL size
async function getUrlSize(content: string): Promise<string> {
    try {
        const response = await axios.head(content);
        const contentLength = response.headers['content-length'];
        return contentLength ? `${(Number(contentLength) / 1024).toFixed(2)} KB` : "Unknown size";
    } catch (error) {
        throw new Error("Error fetching the URL.");
    }
}

export default getContentSize;
