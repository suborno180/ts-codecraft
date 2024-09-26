export const uniqueArray = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
};

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(uniqueArray(numbers)); // Outputs: [1, 2, 3, 4, 5]