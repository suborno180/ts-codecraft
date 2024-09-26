export const getLocalStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

// // Example usage
// const user = getLocalStorage<{ name: string; age: number }>("user");
// console.log(user); // Outputs: { name: "John", age: 30 }