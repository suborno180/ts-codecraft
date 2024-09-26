export const fetchAndCache = async (cacheName: string, request: RequestInfo): Promise<Response> => {
    const response = await fetch(request);
    if (response.ok) {
        const cache = await caches.open(cacheName);
        await cache.put(request, response.clone());
        console.log(`Fetched and cached: ${request}`);
    }
    return response;
};

// Example usage
// fetchAndCache("myCache", "/api/data").then((response) => {
//     response.json().then((data) => console.log("Fetched Data:", data));
// });