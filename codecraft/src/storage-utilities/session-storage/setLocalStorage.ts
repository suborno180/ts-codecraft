export const setLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Example usage
// setLocalStorage("user", { name: "John", age: 30 });