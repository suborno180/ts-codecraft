const listCacheNames = async (): Promise<string[]> => {
    const cacheNames = await caches.keys();
    return cacheNames;
};
export default listCacheNames
// Example usage
// listCacheNames().then((names) => {
//     names.forEach((name) => console.log("Cache Name:", name));
// });