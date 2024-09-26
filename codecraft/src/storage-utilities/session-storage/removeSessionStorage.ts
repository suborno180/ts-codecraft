
export const removeSessionStorage = (key: string): void => {
    sessionStorage.removeItem(key);
};

// Example usage
// removeSessionStorage("sessionUser"); // Removes the sessionUser item from session storage