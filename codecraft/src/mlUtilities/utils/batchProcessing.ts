const batchProcess = <T>(data: T[], batchSize: number, processFunction: (batch: T[]) => void): void => {
    for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);
        processFunction(batch);
    }
};

export default batchProcess;
