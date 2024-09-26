export const batchAddData = <T>(
    db: IDBDatabase,
    storeName: string,
    data: T[]
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);

        data.forEach((item) => {
            store.add(item);
        });

        transaction.oncomplete = () => {
            resolve();
        };

        transaction.onerror = () => {
            reject(`Failed to add batch data: ${transaction.error}`);
        };
    });
};

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     batchAddData(db, "myStore", [
//         { name: "Alice", age: 30 },
//         { name: "Bob", age: 25 },
//     ]).then(() => {
//         console.log("Batch data added successfully");
//     });
// });