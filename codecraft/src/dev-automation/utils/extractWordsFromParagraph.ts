export default function extractWordsFromParagraph(paragraph: string): string[] {
    // Normalize the paragraph by removing punctuation and converting to lowercase
    const normalizedParagraph = paragraph
        .replace(/[.,!?;:()'"“”]/g, '') // Remove punctuation
        .toLowerCase(); // Convert to lowercase

    // Split the paragraph into words based on whitespace
    const words = normalizedParagraph.split(/\s+/).filter(word => word.length > 0);

    return words;
}

// Example usage:
// const exampleParagraph = "Hello! This is an example paragraph. It contains multiple words.";
// const wordsList = extractWordsFromParagraph(exampleParagraph);
// console.log(wordsList); 
// // Output: ["hello", "this", "is", "an", "example", "paragraph", "it", "contains", "multiple", "words"]
