export const getAllLocalStorageKeys = (): string[] => {
    return Object.keys(localStorage);
};

// Example usage
// console.log(getAllLocalStorageKeys()); // Outputs an array of all keys in local storage