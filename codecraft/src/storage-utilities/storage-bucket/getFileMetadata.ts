import { Storage, File } from '@google-cloud/storage';

export const getFileMetadata = async (bucket: any, filePath: string): Promise<any> => {
    const file: File = bucket.file(filePath);
    const [metadata] = await file.getMetadata();
    console.log(`Metadata for ${filePath}:`, metadata);
    return metadata;
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// getFileMetadata(bucket, "uploads/hello.txt").then(metadata => {
//     console.log("File Metadata:", metadata);
// }).catch(err => {
//     console.error("Error fetching metadata:", err);
// });
