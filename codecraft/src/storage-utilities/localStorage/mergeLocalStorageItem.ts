export const mergeLocalStorageItem = (key: string, newData: any): void => {
    const existingItem = localStorage.getItem(key);
    if (existingItem) {
        const mergedItem = { ...JSON.parse(existingItem), ...newData };
        localStorage.setItem(key, JSON.stringify(mergedItem));
    } else {
        localStorage.setItem(key, JSON.stringify(newData)); // Set if not exist
    }
};

// Example usage
// mergeLocalStorageItem("settings", { theme: "dark" }); // Merges or sets settings