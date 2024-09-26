export const openDB = (
    dbName: string,
    storeName: string,
    version: number = 1
): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);

        request.onerror = () => {
            reject(`Failed to open database: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onupgradeneeded = (event) => {
            const db = request.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
            }
        };
    });
};

// Example usage
// openDB("myDB", "myStore")
//     .then((db) => console.log("Database opened:", db))
//     .catch((error) => console.error(error));