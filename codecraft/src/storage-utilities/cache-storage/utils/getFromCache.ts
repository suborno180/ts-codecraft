const getFromCache = async (cacheName: string, request: RequestInfo): Promise<Response | undefined> => {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || undefined;
};

export default getFromCache

// Example usage
// getFromCache("myCache", "/api/data").then((cachedResponse) => {
//     if (cachedResponse) {
//         cachedResponse.json().then((data) => console.log("Cached Data:", data));
//     } else {
//         console.log("No cache found.");
//     }
// });