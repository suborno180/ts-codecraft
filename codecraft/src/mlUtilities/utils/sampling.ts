const smote = (data: number[][], labels: number[], targetClass: number, n: number): number[][] => {
    const minorityClassSamples = data.filter((_, index) => labels[index] === targetClass);
    const newSamples: number[][] = [];

    minorityClassSamples.forEach(sample => {
        for (let i = 0; i < n; i++) {
            const randomIndex = Math.floor(Math.random() * minorityClassSamples.length);
            const neighbor = minorityClassSamples[randomIndex];
            const newSample = sample.map((value, index) => value + (neighbor[index] - value) * Math.random());
            newSamples.push(newSample);
        }
    });

    return [...data, ...newSamples];
};

export default smote;
