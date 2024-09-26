const startOfWeek = (date: Date): Date => {
    const result = new Date(date);
    const day = result.getDay(); // 0 = Sunday, 6 = Saturday
    const diff = (day === 0 ? -6 : 1) - day; // Adjust for Monday as the start of the week
    result.setDate(result.getDate() + diff);
    return result;
};

export default startOfWeek