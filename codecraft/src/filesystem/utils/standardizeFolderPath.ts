// Define the types for URL conversion options
type UrlType = "toBackslash" | "toForwardSlash";

interface standardizeFolderPathOptions {
    type: UrlType;
}

// Function to standardize URLs based on user-selected type
function standardizeFolderPath(input: string, options: standardizeFolderPathOptions): string {
    // Normalize input
    let normalized = input.trim();

    if (options.type === "toBackslash") {
        // Convert to backslashes
        return normalized.replace(/\//g, '\\');
    } else if (options.type === "toForwardSlash") {
        // Convert to forward slashes
        return normalized.replace(/\\/g, '/');
    }

    throw new Error("Invalid URL conversion type.");
}

export default standardizeFolderPath;
