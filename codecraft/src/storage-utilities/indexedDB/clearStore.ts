export const clearStore = (db: IDBDatabase, storeName: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.clear();

        request.onerror = () => {
            reject(`Failed to clear store: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve();
        };
    });
};

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     clearStore(db, "myStore").then(() => {
//         console.log("Store cleared");
//     });
// });