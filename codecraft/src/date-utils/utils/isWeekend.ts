// isWeekend.ts

const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6;
};

export default isWeekend

// Usage example

// const today = new Date();
// const result = isWeekend(today);
// console.log(result); // Output: true or false depending on the day
