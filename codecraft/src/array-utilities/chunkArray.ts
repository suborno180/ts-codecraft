export const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
};

// // Example usage
// const array = [1, 2, 3, 4, 5, 6];
// console.log(chunkArray(array, 2)); // Outputs: [[1, 2], [3, 4], [5, 6]]