// uploadFile.ts

export const uploadFile = async (bucket: any, file: File, filePath: string): Promise<string> => {
    const fileRef = bucket.file(filePath);
    await fileRef.save(file);
    console.log(`File uploaded to ${filePath}`);
    
    // Returning the public URL of the file
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;
    return publicUrl;
};

// Example usage (assuming a Google Cloud Storage bucket)
// import { Storage } from '@google-cloud/storage';
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');

// const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
// uploadFile(bucket, file, "uploads/hello.txt").then(url => {
//     console.log("File uploaded at: ", url);
// });
