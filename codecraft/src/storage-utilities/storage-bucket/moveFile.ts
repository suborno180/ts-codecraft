import { Storage, Bucket, File } from '@google-cloud/storage';

export const moveFile = async (bucket: Bucket, srcPath: string, destPath: string): Promise<void> => {
    const srcFile: File = bucket.file(srcPath);
    await srcFile.move(destPath);
    console.log(`File moved from ${srcPath} to ${destPath}`);
};

// Example usage
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// moveFile(bucket, "uploads/hello.txt", "archives/hello.txt")
//     .then(() => {
//         console.log("File moved successfully");
//     })
//     .catch(err => {
//         console.error("Error moving file:", err);
//     });
