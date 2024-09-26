export const updateLocalStorageItem = (key: string, newValue: any): void => {
    const existingItem = localStorage.getItem(key);
    if (existingItem) {
        const updatedItem = { ...JSON.parse(existingItem), ...newValue };
        localStorage.setItem(key, JSON.stringify(updatedItem));
    }
};

// Example usage
// updateLocalStorageItem("user", { age: 31 }); // Updates age if the user item exists