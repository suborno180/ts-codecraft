export const clearCache = async (cacheName: string): Promise<void> => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    await Promise.all(keys.map((key) => cache.delete(key)));
    console.log(`Cache cleared: ${cacheName}`);
};

// Example usage
// clearCache("myCache").then(() => {
//     console.log("Cache cleared successfully");
// });