const imputeMissingValues = (data: (number | null)[], method: 'mean' | 'median' | 'mode'): number[] => {
    const validData = data.filter(value => value != null) as number[];
    let imputedValue: number;

    switch (method) {
        case 'mean':
            imputedValue = validData.reduce((sum, val) => sum + val, 0) / validData.length;
            break;
        case 'median':
            validData.sort((a, b) => a - b);
            const mid = Math.floor(validData.length / 2);
            imputedValue = validData.length % 2 !== 0 ? validData[mid] : (validData[mid - 1] + validData[mid]) / 2;
            break;
        case 'mode':
            const modeMap: Record<number, number> = {};
            validData.forEach(val => modeMap[val] = (modeMap[val] || 0) + 1);
            // Use type assertion to convert keys to numbers
            const modeKey = +Object.keys(modeMap).reduce((a, b) => modeMap[+a] > modeMap[+b] ? a : b);
            imputedValue = modeKey;
            break;
        default:
            throw new Error('Invalid method');
    }

    return data.map(value => (value == null ? imputedValue : value));
};

export default imputeMissingValues;
