const movingAverage = (data: number[], windowSize: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < data.length - windowSize + 1; i++) {
        const window = data.slice(i, i + windowSize);
        const average = window.reduce((sum, value) => sum + value, 0) / windowSize;
        result.push(average);
    }
    return result;
};

export default movingAverage;
