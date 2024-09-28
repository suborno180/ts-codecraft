const countRecords = (
    db: IDBDatabase,
    storeName: string
): Promise<number> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.count();

        request.onerror = () => {
            reject(`Failed to count records: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};
export default countRecords
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     countRecords(db, "myStore").then((count) => {
//         console.log(`Total records: ${count}`);
//     });
// });