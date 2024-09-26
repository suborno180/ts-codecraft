const selectFeaturesByCorrelation = (data: Record<string, number>[], target: string, threshold: number): string[] => {
    const correlations: Record<string, number> = {};
    const n = data.length;

    // Calculate mean of the target variable
    const targetMean = data.reduce((sum, row) => sum + row[target], 0) / n;

    Object.keys(data[0]).forEach(feature => {
        if (feature !== target) {
            // Calculate mean of the feature variable
            const featureMean = data.reduce((sum, row) => sum + row[feature], 0) / n;

            // Calculate the numerator and denominator for Pearson correlation
            let numerator = 0;
            let featureVariance = 0;
            let targetVariance = 0;

            for (const row of data) {
                const featureDiff = row[feature] - featureMean;
                const targetDiff = row[target] - targetMean;
                numerator += featureDiff * targetDiff;
                featureVariance += featureDiff ** 2;
                targetVariance += targetDiff ** 2;
            }

            // Calculate the correlation coefficient
            const correlation = numerator / Math.sqrt(featureVariance * targetVariance);

            if (Math.abs(correlation) >= threshold) {
                correlations[feature] = correlation;
            }
        }
    });

    return Object.keys(correlations);
};

export default selectFeaturesByCorrelation;
