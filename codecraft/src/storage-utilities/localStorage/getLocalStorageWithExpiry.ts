export const getLocalStorageWithExpiry = <T>(key: string): T | null => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

// Example usage
// const tempData = getLocalStorageWithExpiry<{ name: string }>("temporaryData");
// console.log(tempData); // Outputs: { name: "Temp Data" } or null if expired