import extractWordsFromParagraph from "./extractWordsFromParagraph";

export default function extractUniqueWords(paragraph: string): string[] {
    const words = extractWordsFromParagraph(paragraph);
    return Array.from(new Set(words));
}

// Example usage:
// const exampleParagraph = "Hello! This is an example. This is a test.";
// const uniqueWords = extractUniqueWords(exampleParagraph);
// console.log(uniqueWords);
// Output: ["hello", "this", "is", "an", "example", "a", "test"]
