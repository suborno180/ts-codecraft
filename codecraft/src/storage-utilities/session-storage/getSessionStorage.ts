export const getSessionStorage = <T>(key: string): T | null => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

// Example usage
// const sessionUser = getSessionStorage<{ name: string; age: number }>("sessionUser");
// console.log(sessionUser); // Outputs: { name: "Jane", age: 25 }