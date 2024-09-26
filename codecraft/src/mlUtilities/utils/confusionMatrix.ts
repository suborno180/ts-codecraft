const confusionMatrix = (actual: number[], predicted: number[]): Record<string, number> => {
    const matrix: Record<string, number> = {
        truePositive: 0,
        trueNegative: 0,
        falsePositive: 0,
        falseNegative: 0,
    };

    actual.forEach((label, index) => {
        if (label === 1 && predicted[index] === 1) {
            matrix.truePositive++;
        } else if (label === 0 && predicted[index] === 0) {
            matrix.trueNegative++;
        } else if (label === 0 && predicted[index] === 1) {
            matrix.falsePositive++;
        } else if (label === 1 && predicted[index] === 0) {
            matrix.falseNegative++;
        }
    });

    return matrix;
};

export default confusionMatrix;
