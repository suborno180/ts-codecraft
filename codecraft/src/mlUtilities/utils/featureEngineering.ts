const polynomialFeatures = (data: number[][], degree: number): number[][] => {
    const output: number[][] = [];
    data.forEach(row => {
        const newRow = [];
        for (let d = 1; d <= degree; d++) {
            newRow.push(...row.map(value => Math.pow(value, d)));
        }
        output.push(newRow);
    });
    return output;
};

export default polynomialFeatures;
