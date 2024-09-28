const deleteDataByIndex = (
    db: IDBDatabase,
    storeName: string,
    indexName: string,
    indexValue: any
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const index = store.index(indexName);
        const request = index.openCursor(IDBKeyRange.only(indexValue));

        request.onerror = () => {
            reject(`Failed to delete data by index: ${request.error}`);
        };

        request.onsuccess = (event) => {
            const cursor = request.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            } else {
                resolve();
            }
        };
    });
};
export default deleteDataByIndex
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     deleteDataByIndex(db, "myStore", "age", 25).then(() => {
//         console.log("Data matching index deleted");
//     });
// });