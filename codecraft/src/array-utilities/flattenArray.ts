export const flattenArray = <T>(arr: T[][]): T[] => {
    return arr.reduce((acc, val) => acc.concat(val), []);
};

// // Example usage
// const nestedArray = [[1, 2], [3, 4], [5]];
// console.log(flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4, 5]