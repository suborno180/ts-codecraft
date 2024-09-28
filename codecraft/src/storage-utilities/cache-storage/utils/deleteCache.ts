const deleteCache = async (cacheName: string): Promise<boolean> => {
    const success = await caches.delete(cacheName);
    console.log(`Cache deleted: ${cacheName}`);
    return success;
};
export default deleteCache
// Example usage
// deleteCache("myCache").then((success) => {
//     if (success) {
//         console.log("Cache deleted successfully");
//     } else {
//         console.log("Cache not found");
//     }
// });