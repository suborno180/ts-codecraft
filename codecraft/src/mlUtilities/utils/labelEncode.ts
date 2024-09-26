const labelEncode = (data: string[]): { encoding: Record<string, number>; encoded: number[] } => {
    const uniqueValues = Array.from(new Set(data));
    const encoding: Record<string, number> = {};
    uniqueValues.forEach((value, index) => {
        encoding[value] = index;
    });
    const encoded = data.map(value => encoding[value]);
    
    return { encoding, encoded };
};

export default labelEncode;
