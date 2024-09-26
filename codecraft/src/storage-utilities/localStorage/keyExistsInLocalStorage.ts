export const keyExistsInLocalStorage = (key: string): boolean => {
    return localStorage.getItem(key) !== null;
};

// Example usage
// console.log(keyExistsInLocalStorage("user")); // Outputs: true or false based on existence