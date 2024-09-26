const minMaxScale = (data: number[]): number[] => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return data.map(value => (value - min) / (max - min));
};

const standardize = (data: number[]): number[] => {
    const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
    const stdDev = Math.sqrt(data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length);
    return data.map(value => (value - mean) / stdDev);
};

export { minMaxScale, standardize };
