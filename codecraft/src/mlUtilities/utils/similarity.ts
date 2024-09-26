const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
    const dotProduct = vecA.reduce((sum, value, index) => sum + value * vecB[index], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, value) => sum + value ** 2, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, value) => sum + value ** 2, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};
export default cosineSimilarity