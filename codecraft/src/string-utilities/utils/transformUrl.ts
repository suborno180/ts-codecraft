export interface TransformOptions {
    baseUrl?: string;        // Base URL for relative conversion
    customProtocol?: string; // Custom protocol for output (e.g., ftp)
    host?: string;           // Host for HTTP/HTTPS
    port?: number;           // Custom port for HTTP/HTTPS
    queryParams?: Record<string, string>; // Query parameters to append
    fragment?: string;       // Fragment identifier to append
}

function transformUrl(inputUrl: string, targetType: 'absolute' | 'relative' | 'http' | 'data', options?: TransformOptions): string | null {
    try {
        let urlObject: URL;

        // Normalize backslashes for Windows paths and replace single backslashes with forward slashes
        const normalizedPath = inputUrl.replace(/\\/g, '/'); // Normalize backslashes

        // Check if the input is a valid HTTP URL
        if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
            urlObject = new URL(normalizedPath);
        } else {
            // Assume it's a file path
            urlObject = new URL(`file://${normalizedPath}`);
        }

        // Transform based on targetType
        switch (targetType) {
            case 'absolute':
                return urlObject.href; // Return the absolute URL

            case 'relative':
                // Convert to a relative URL based on a provided base URL
                if (options?.baseUrl) {
                    const base = new URL(options.baseUrl);
                    return urlObject.pathname.replace(base.pathname, ''); // Return the relative path
                }
                throw new Error("Base URL must be provided for relative conversion.");

            case 'http':
                // Construct an HTTP URL with optional custom host and port
                const httpUrl = new URL(urlObject.pathname, `${options?.customProtocol || 'http'}://${options?.host || 'localhost'}`);
                if (options?.port) {
                    httpUrl.port = options.port.toString(); // Set custom port if provided
                }
                // Append query parameters if any
                if (options?.queryParams && Object.keys(options.queryParams).length > 0) {
                    Object.keys(options.queryParams).forEach(key => {
                        httpUrl.searchParams.append(key, options.queryParams![key]); // Use non-null assertion since we checked it
                    });
                }
                // Append fragment if provided
                if (options?.fragment) {
                    httpUrl.hash = options.fragment;
                }
                return httpUrl.href;

            case 'data':
                // Convert to Data URL (this should be replaced with actual file data)
                const data = '...'; // Placeholder for actual base64 data
                return `data:application/pdf;base64,${data}`;

            default:
                return null; // Return null if an invalid targetType is provided
        }
    } catch (error) {
        console.error(`Error transforming URL: ${(error as Error).message}`); // Log any errors that occur
        return null; // Return null if an error occurs
    }
}

export default transformUrl;

// Example usage
// async function main() {
//     const filePath = 'E:\\practic\\bpi-edureport-bot\\src'; // Single backslash can be passed

//     // Transform to Absolute URL
//     const absoluteUrl = transformUrl(filePath, 'absolute');
//     console.log(absoluteUrl); 
//     // Output: file:///E:/practic/bpi-edureport-bot/src

//     // Transform to HTTP URL
//     const transformedHttpUrl = transformUrl(filePath, 'http', {
//         customProtocol: 'http',
//         host: 'example.com',
//         port: 8080,
//         queryParams: { key1: 'value1', key2: 'value2' },
//         fragment: 'section1'
//     });
//     console.log(transformedHttpUrl); 
//     // Output: http://example.com:8080/E:/practic/bpi-edureport-bot/src?key1=value1&key2=value2#section1
// }

// main();
