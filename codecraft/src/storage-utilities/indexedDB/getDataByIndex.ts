export const getDataByIndex = (
    db: IDBDatabase,
    storeName: string,
    indexName: string,
    indexValue: any
): Promise<any> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const index = store.index(indexName);
        const request = index.get(indexValue);

        request.onerror = () => {
            reject(`Failed to retrieve data by index: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     getDataByIndex(db, "myStore", "age", 25).then((data) => {
//         console.log("Data retrieved by index:", data);
//     });
// });

// Note: When you set up the database, make sure to define an index in the onupgradeneeded event:

// const store = db.createObjectStore("myStore", { keyPath: "id", autoIncrement: true });
// store.createIndex("age", "age", { unique: false });