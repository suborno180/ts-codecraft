import * as fs from 'fs';
import * as path from 'path';
import plotConfusionMatrix from "../mlUtilities/utils/confusionMatrixVisualization";

const confusionMatrix: number[][] = [
    [100, 190, 2],
    [4, 1, 95],
    [90, 10, 5],
];
const classNames: string[] = ['Cat', 'Dog', 'Fox'];

plotConfusionMatrix(confusionMatrix, classNames)
    .then((buffer: Buffer) => {
        const outputPath = path.join(__dirname, 'confusionMatrix.png');
        fs.writeFileSync(outputPath, buffer);
        console.log(`Confusion matrix image saved to ${outputPath}`);
    })
    .catch((error: Error) => {
        console.error('Error generating confusion matrix:', error);
    });
