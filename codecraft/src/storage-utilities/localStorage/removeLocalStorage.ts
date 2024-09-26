export const removeLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};

// Example usage
// removeLocalStorage("user"); // Removes the user item from local storage