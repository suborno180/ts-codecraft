export const setSessionStorage = (key: string, value: any): void => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

// Example usage
setSessionStorage("sessionUser", { name: "Jane", age: 25 });