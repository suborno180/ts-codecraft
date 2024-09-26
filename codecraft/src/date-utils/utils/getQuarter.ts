export const getQuarter = (date: Date): number => {
    const month = date.getMonth();
    return Math.floor(month / 3) + 1;
};

export default getQuarter