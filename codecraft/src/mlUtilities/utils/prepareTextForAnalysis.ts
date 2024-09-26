export const prepareTextForAnalysis = (text: string): string => {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, '');
};
