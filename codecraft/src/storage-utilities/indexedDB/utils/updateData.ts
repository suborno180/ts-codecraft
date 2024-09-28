const updateData = <T>(
    db: IDBDatabase,
    storeName: string,
    key: IDBValidKey,
    newData: T
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.put({ ...newData, id: key });

        request.onerror = () => {
            reject(`Failed to update data: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve();
        };
    });
};
export default updateData
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     updateData(db, "myStore", 1, { name: "Jane Doe", age: 25 }).then(() => {
//         console.log("Data updated");
//     });
// });