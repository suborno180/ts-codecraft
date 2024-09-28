const closeDB = (db: IDBDatabase): void => {
    db.close();
    console.log("Database connection closed");
};
export default closeDB
// Example usage
// openDB("myDB", "myStore").then((db) => {
//     closeDB(db);
// });