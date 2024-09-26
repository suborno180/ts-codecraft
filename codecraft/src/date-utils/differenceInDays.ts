export const differenceInDays = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffInTime / oneDay);
};