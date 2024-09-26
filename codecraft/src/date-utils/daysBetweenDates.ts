// daysBetweenDates.ts

export const daysBetweenDates = (date1: Date, date2: Date): number => {
    // Get the time difference in milliseconds
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());

    // Convert the time difference from milliseconds to days
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    return Math.ceil(timeDifference / millisecondsInOneDay);
};

// Usage example
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-09-25');

// const numberOfDays = daysBetweenDates(startDate, endDate);
// console.log(numberOfDays); // Output: 268
