const updateCacheEntry = async (cacheName: string, request: RequestInfo, newResponse: Response): Promise<void> => {
    const cache = await caches.open(cacheName);
    await cache.put(request, newResponse.clone());
    console.log(`Cache entry updated for request: ${request}`);
};
export default updateCacheEntry
// Example usage
// fetch("/api/new-data").then((newResponse) => {
//     updateCacheEntry("myCache", "/api/data", newResponse);
// });