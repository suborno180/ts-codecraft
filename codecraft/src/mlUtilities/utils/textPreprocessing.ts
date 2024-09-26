const tokenize = (text: string): string[] => text.split(/\W+/).filter(Boolean);

const removeStopWords = (tokens: string[], stopWords: string[]): string[] => {
    return tokens.filter(token => !stopWords.includes(token.toLowerCase()));
};

export { tokenize, removeStopWords };
