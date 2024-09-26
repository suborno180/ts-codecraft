export const setLocalStorageWithExpiry = (key: string, value: any, expiryInMinutes: number): void => {
    const now = new Date();
    const item = {
        value,
        expiry: now.getTime() + expiryInMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

// Example usage
// setLocalStorageWithExpiry("temporaryData", { name: "Temp Data" }, 10); // Expires in 10 minutes