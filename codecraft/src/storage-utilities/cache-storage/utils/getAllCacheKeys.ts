const getAllCacheKeys = async (cacheName: string): Promise<Request[]> => {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    return Array.from(keys); // Create a mutable array from the readonly array
};
export default getAllCacheKeys
// Example usage
// getAllCacheKeys("myCache").then((keys) => {
//     keys.forEach((key) => console.log("Cached request:", key.url));
// });
