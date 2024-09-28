const getData = (
    db: IDBDatabase,
    storeName: string,
    key: IDBValidKey
): Promise<any> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onerror = () => {
            reject(`Failed to retrieve data: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};
export default getData
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     getData(db, "myStore", 1).then((data) => {
//         console.log("Retrieved data:", data);
//     });
// });