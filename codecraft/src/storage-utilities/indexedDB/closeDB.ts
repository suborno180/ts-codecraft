export const closeDB = (db: IDBDatabase): void => {
    db.close();
    console.log("Database connection closed");
};

// Example usage
// openDB("myDB", "myStore").then((db) => {
//     closeDB(db);
// });