import { Storage, Bucket, File } from '@google-cloud/storage';

export const fileExists = async (bucket: Bucket, filePath: string): Promise<boolean> => {
    const file: File = bucket.file(filePath);
    const [exists] = await file.exists();
    return exists;
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// fileExists(bucket, "uploads/hello.txt").then(exists => {
//     console.log(exists ? "File exists" : "File does not exist");
// }).catch(err => {
//     console.error("Error checking file existence:", err);
// });
