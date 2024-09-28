const dataExists = (
    db: IDBDatabase,
    storeName: string,
    key: IDBValidKey
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onerror = () => {
            reject(`Error checking data existence: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve(!!request.result);
        };
    });
};
export default dataExists
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     dataExists(db, "myStore", 1).then((exists) => {
//         if (exists) {
//             console.log("Data exists");
//         } else {
//             console.log("Data does not exist");
//         }
//     });
// });