export const clearExpiredLocalStorage = (): void => {
    const keys = Object.keys(localStorage);
    const now = new Date();
    
    keys.forEach(key => {
        const itemStr = localStorage.getItem(key);
        if (itemStr) {
            const item = JSON.parse(itemStr);
            if (now.getTime() > item.expiry) {
                localStorage.removeItem(key);
            }
        }
    });
};

// Example usage
// clearExpiredLocalStorage(); // Clears expired items from local storage