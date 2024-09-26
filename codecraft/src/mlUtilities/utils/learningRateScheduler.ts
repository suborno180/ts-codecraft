const learningRateScheduler = (initialRate: number, epoch: number, decayRate: number): number => {
    return initialRate / (1 + decayRate * epoch);
};

export default learningRateScheduler;
