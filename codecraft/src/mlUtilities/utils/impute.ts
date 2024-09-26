const impute = (data: number[], method: 'mean' | 'median'): number[] => {
    const validData = data.filter(value => value !== null);
    const imputedValue = method === 'mean' 
        ? validData.reduce((sum, value) => sum + value, 0) / validData.length 
        : validData.sort((a, b) => a - b)[Math.floor(validData.length / 2)];

    return data.map(value => (value === null ? imputedValue : value));
};

export default impute;
