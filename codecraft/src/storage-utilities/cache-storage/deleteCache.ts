export const deleteCache = async (cacheName: string): Promise<boolean> => {
    const success = await caches.delete(cacheName);
    console.log(`Cache deleted: ${cacheName}`);
    return success;
};

// Example usage
// deleteCache("myCache").then((success) => {
//     if (success) {
//         console.log("Cache deleted successfully");
//     } else {
//         console.log("Cache not found");
//     }
// });