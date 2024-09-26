import { Storage, Bucket, File } from '@google-cloud/storage';

export const copyFile = async (bucket: Bucket, srcPath: string, destPath: string): Promise<void> => {
    const srcFile: File = bucket.file(srcPath);
    await srcFile.copy(bucket.file(destPath));
    console.log(`File copied from ${srcPath} to ${destPath}`);
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// copyFile(bucket, "uploads/hello.txt", "archives/hello.txt").then(() => {
//     console.log("File copied successfully");
// }).catch(err => {
//     console.error("Error copying file:", err);
// });
