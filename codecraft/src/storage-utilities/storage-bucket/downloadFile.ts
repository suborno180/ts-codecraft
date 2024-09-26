import { Storage } from '@google-cloud/storage';

// Initialize the Google Cloud Storage client
const storage = new Storage();
const bucketName = 'your-bucket-name'; // Replace with your bucket name
const bucket = storage.bucket(bucketName);

export const downloadFile = async (bucket: any, filePath: string, destination: string): Promise<void> => {
    const file = bucket.file(filePath);
    await file.download({ destination });
    console.log(`File downloaded to ${destination}`);
};

// Example usage (Google Cloud Storage)
downloadFile(bucket, "uploads/hello.txt", "./downloads/hello.txt").then(() => {
    console.log("Download complete");
}).catch(err => {
    console.error("Error downloading file:", err);
});
