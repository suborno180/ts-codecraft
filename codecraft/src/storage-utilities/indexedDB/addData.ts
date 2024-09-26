export const addData = <T>(
    db: IDBDatabase,
    storeName: string,
    data: T
): Promise<IDBValidKey> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.add(data);

        request.onerror = () => {
            reject(`Failed to add data: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     addData(db, "myStore", { name: "John Doe", age: 30 }).then((key) => {
//         console.log("Data added with key:", key);
//     });
// });