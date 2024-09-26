export const computeWordLengths = (text: string): number[] => {
    return text.split(" ").map(word => word.length); // Simplistic example
};
