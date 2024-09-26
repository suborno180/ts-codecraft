export const cacheExists = async (cacheName: string): Promise<boolean> => {
    const cacheKeys = await caches.keys();
    return cacheKeys.includes(cacheName);
};

// Example usage
// cacheExists("myCache").then((exists) => {
//     console.log(`Cache exists: ${exists}`);
// });