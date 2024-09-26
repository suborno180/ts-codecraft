export const addToCache = async (cacheName: string, request: RequestInfo, response: Response): Promise<void> => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
    console.log(`Added request to cache: ${request}`);
};

// Example usage
// fetch("/api/data").then((response) => {
//     if (response.ok) {
//         addToCache("myCache", "/api/data", response.clone());
//     }
// });