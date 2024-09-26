const addDays = (date: Date, days: number): Date => {
    const result = new Date(date); // Create a new date object based on the input date
    result.setDate(result.getDate() + days); // Add the specified number of days
    return result; // Return the new date
};

export default addDays; // Export the function as the default export
