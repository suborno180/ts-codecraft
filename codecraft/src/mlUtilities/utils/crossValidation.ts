const crossValidation = <T>(data: T[], k: number, modelFunc: (train: T[], test: T[]) => any): any[] => {
    const shuffledData = data.sort(() => 0.5 - Math.random());
    const foldSize = Math.floor(shuffledData.length / k);
    const results: any[] = [];

    for (let i = 0; i < k; i++) {
        const testSet = shuffledData.slice(i * foldSize, (i + 1) * foldSize);
        const trainSet = shuffledData.slice(0, i * foldSize).concat(shuffledData.slice((i + 1) * foldSize));
        results.push(modelFunc(trainSet, testSet));
    }

    return results;
};

export default crossValidation;
