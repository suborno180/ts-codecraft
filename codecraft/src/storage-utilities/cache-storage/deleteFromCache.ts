export const deleteFromCache = async (cacheName: string, request: RequestInfo): Promise<boolean> => {
    const cache = await caches.open(cacheName);
    const success = await cache.delete(request);
    console.log(`Deleted request from cache: ${request}`);
    return success;
};

// Example usage
// deleteFromCache("myCache", "/api/data").then((success) => {
//     if (success) {
//         console.log("Cache entry deleted successfully");
//     } else {
//         console.log("Cache entry not found");
//     }
// });