const deleteDB = (dbName: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName);

        request.onerror = () => {
            reject(`Failed to delete database: ${request.error}`);
        };

        request.onsuccess = () => {
            resolve();
        };
    });
};

export default deleteDB 

// Example usage
// deleteDB("myDB").then(() => {
//     console.log("Database deleted successfully");
// });
