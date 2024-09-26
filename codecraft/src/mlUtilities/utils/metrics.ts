import confusionMatrix from "./confusionMatrix";

const accuracy = (actual: number[], predicted: number[]): number => {
    const correct = actual.filter((value, index) => value === predicted[index]).length;
    return correct / actual.length;
};

const precision = (actual: number[], predicted: number[]): number => {
    const matrix = confusionMatrix(actual, predicted);
    return matrix.truePositive / (matrix.truePositive + matrix.falsePositive);
};

const recall = (actual: number[], predicted: number[]): number => {
    const matrix = confusionMatrix(actual, predicted);
    return matrix.truePositive / (matrix.truePositive + matrix.falseNegative);
};

export { accuracy, precision, recall };
