const getAllData = (db: IDBDatabase, storeName: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onerror = () => {
            reject(`Failed to retrieve all data: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

export default getAllData

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     getAllData(db, "myStore").then((allData) => {
//         console.log("All data:", allData);
//     });
// });