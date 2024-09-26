import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import { ChartTypeRegistry, ChartConfiguration } from 'chart.js';

const plotConfusionMatrix = (matrix: number[][], classNames: string[]): Promise<Buffer> => {
    const chartCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });

    const data = {
        labels: classNames,
        datasets: [{
            label: 'Confusion Matrix',
            data: matrix.flat(), // Flatten the matrix
            backgroundColor: classNames.map((_, index) => `rgba(0, 0, 255, ${0.2 + (index / classNames.length) * 0.5})`) // More dynamic coloring
        }]
    };

    const configuration: ChartConfiguration<keyof ChartTypeRegistry> = {
        type: 'bar', // or any other chart type
        data,
        options: {
            scales: {
                x: {
                    display: true,
                    stacked: true,
                    title: { display: true, text: 'Predicted Class' }
                },
                y: {
                    display: true,
                    stacked: true,
                    title: { display: true, text: 'True Class' }
                }
            }
        }
    };

    return chartCanvas.renderToBuffer(configuration); // Return the buffer
};

export default plotConfusionMatrix;
