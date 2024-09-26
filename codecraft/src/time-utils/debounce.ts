export const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;

    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
};

// Usage example
const log = debounce(() => console.log('Hello!'), 1000);
log(); // Will only log 'Hello!' after 1 second of inactivity