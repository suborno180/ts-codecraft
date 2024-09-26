
// Initialize the Google Cloud Storage client
const storage = new Storage();
const bucketName = 'my-bucket'; // Replace with your actual bucket name

export const deleteFile = async (bucket: any, filePath: string): Promise<void> => {
    const file = bucket.file(filePath);
    await file.delete();
    console.log(`File deleted: ${filePath}`);
};

// Example usage
// import { Storage } from '@google-cloud/storage';
// const bucket = storage.bucket(bucketName);
// deleteFile(bucket, "uploads/hello.txt").then(() => {
//     console.log("File deleted successfully");
// }).catch(err => {
//     console.error("Error deleting file:", err);
// });
