const stratifiedTrainTestSplit = <T>(data: T[], labels: number[], testSize: number): [T[], T[]] => {
    const labelMap: Record<number, T[]> = {};
    labels.forEach((label, index) => {
        if (!labelMap[label]) labelMap[label] = [];
        labelMap[label].push(data[index]);
    });

    const trainSet: T[] = [];
    const testSet: T[] = [];

    Object.keys(labelMap).forEach(label => {
        const splitIndex = Math.floor(labelMap[Number(label)].length * (1 - testSize));
        trainSet.push(...labelMap[Number(label)].slice(0, splitIndex));
        testSet.push(...labelMap[Number(label)].slice(splitIndex));
    });

    return [trainSet, testSet];
};

export default stratifiedTrainTestSplit;
