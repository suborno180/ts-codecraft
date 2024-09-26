import { Storage, File } from '@google-cloud/storage';

export const generateSignedUrl = async (
    bucket: any, 
    filePath: string, 
    expiration: number = 60
): Promise<string> => {
    const file: File = bucket.file(filePath);
    const [url] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + expiration * 60 * 1000, // expiration in minutes
    });
    console.log(`Generated signed URL for ${filePath}: ${url}`);
    return url;
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// generateSignedUrl(bucket, "uploads/hello.txt", 30).then(url => {
//     console.log("Signed URL:", url);
// }).catch(err => {
//     console.error("Error generating signed URL:", err);
// });