const formatTime = (time: string): string => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:${String(minutes).padStart(2, '0')} ${period}`;
};
export default formatTime