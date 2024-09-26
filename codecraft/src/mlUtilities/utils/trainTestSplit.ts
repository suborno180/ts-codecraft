const trainTestSplit = <T>(data: T[], testSize: number): [T[], T[]] => {
    const shuffledData = data.sort(() => 0.5 - Math.random());
    const trainSize = Math.floor(data.length * (1 - testSize));
    const trainSet = shuffledData.slice(0, trainSize);
    const testSet = shuffledData.slice(trainSize);
    return [trainSet, testSet];
};

export default trainTestSplit;
