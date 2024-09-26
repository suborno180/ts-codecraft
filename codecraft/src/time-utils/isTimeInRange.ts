export const isTimeInRange = (time: string, start: string, end: string): boolean => {
    const timeInSeconds = time.split(':').map(Number).reduce((acc, val) => acc * 60 + val);
    const startInSeconds = start.split(':').map(Number).reduce((acc, val) => acc * 60 + val);
    const endInSeconds = end.split(':').map(Number).reduce((acc, val) => acc * 60 + val);
    
    return timeInSeconds >= startInSeconds && timeInSeconds <= endInSeconds;
};
