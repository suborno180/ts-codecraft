const gridSearch = (model: any, paramGrid: Record<string, any[]>, X: any[], y: any[]): Record<string, any> => {
    let bestParams: Record<string, any> = {};
    let bestScore = -Infinity;

    const keys = Object.keys(paramGrid);
    const combinations = (arr: any[], index: number): Record<string, any>[] => {
        if (index === keys.length) return [{}];
        return paramGrid[keys[index]].flatMap(value =>
            combinations(arr, index + 1).map(item => ({ ...item, [keys[index]]: value }))
        );
    };

    for (const params of combinations([], 0)) {
        model.setParams(params);
        const score = model.evaluate(X, y);
        if (score > bestScore) {
            bestScore = score;
            bestParams = params;
        }
    }
    return bestParams;
};

export default gridSearch;
