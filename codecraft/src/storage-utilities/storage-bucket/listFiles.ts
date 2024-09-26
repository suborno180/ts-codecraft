import { Storage, File } from '@google-cloud/storage';

export const listFiles = async (bucket: any, prefix: string = ""): Promise<string[]> => {
    const [files]: [File[]] = await bucket.getFiles({ prefix }); // Type annotation here
    const fileNames = files.map((file: File) => file.name); // Explicit type for file
    console.log("Files in bucket:", fileNames);
    return fileNames;
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');
// listFiles(bucket, "uploads/").then(files => {
//     console.log("Files in uploads directory:", files);
// }).catch(err => {
//     console.error("Error listing files:", err);
// });
