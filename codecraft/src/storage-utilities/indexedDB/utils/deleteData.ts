const deleteData = (
    db: IDBDatabase,
    storeName: string,
    key: IDBValidKey
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(key);

        request.onerror = () => {
            reject(`Failed to delete data: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve();
        };
    });
};
export default deleteData
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     deleteData(db, "myStore", 1).then(() => {
//         console.log("Data deleted");
//     });
// });