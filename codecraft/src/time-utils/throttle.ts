export const throttle = (func: (...args: any[]) => void, limit: number) => {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;

    return function (...args: any[]) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

// Usage example
// const log = throttle(() => console.log('Throttled!'), 2000);
// log(); // Will log 'Throttled!' at most once every 2 seconds