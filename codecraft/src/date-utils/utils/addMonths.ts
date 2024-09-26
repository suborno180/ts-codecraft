const addMonths = (date: Date, months: number): Date => {
    const result = new Date(date); // Create a new date object based on the input date
    result.setMonth(result.getMonth() + months); // Add the specified number of months
    return result; // Return the new date
};

export default addMonths; // Export the function as the default export
