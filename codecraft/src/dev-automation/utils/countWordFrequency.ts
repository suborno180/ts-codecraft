import extractWordsFromParagraph from "./extractWordsFromParagraph";

export default function countWordFrequency(paragraph: string): Record<string, number> {
    const words = extractWordsFromParagraph(paragraph);
    const frequency: Record<string, number> = {};

    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });

    return frequency;
}

// Example usage:
// const exampleParagraph = "Hello! This is an example. This is a test.";
// const wordFrequency = countWordFrequency(exampleParagraph);
// console.log(wordFrequency);
// Output: { hello: 1, this: 2, is: 2, an: 1, example: 1, a: 1, test: 1 }
