const oneHotEncode = (data: string[]): Record<string, number>[] => {
    const uniqueValues = Array.from(new Set(data));
    return data.map(value => {
        const obj: Record<string, number> = {};
        uniqueValues.forEach(unique => {
            obj[unique] = unique === value ? 1 : 0;
        });
        return obj;
    });
};

export default oneHotEncode;
