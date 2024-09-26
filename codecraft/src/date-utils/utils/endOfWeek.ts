const endOfWeek = (date: Date): Date => {
    const result = new Date(date);
    const day = result.getDay();
    const diff = 7 - day; // Adjust for Sunday as the end of the week
    result.setDate(result.getDate() + diff);
    return result;
};

export default endOfWeek 