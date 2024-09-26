export const listCacheNames = async (): Promise<string[]> => {
    const cacheNames = await caches.keys();
    return cacheNames;
};

// Example usage
// listCacheNames().then((names) => {
//     names.forEach((name) => console.log("Cache Name:", name));
// });