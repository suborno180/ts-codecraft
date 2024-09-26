// convertTo24HourFormat.ts

export const convertTo24HourFormat = (time: string): string => {
    const [timePart, period] = time.split(' '); // Split into time and period (AM/PM)
    let [hours, minutes] = timePart.split(':').map(Number); // Split hours and minutes

    // Convert to 24-hour format
    if (period.toUpperCase() === 'PM' && hours < 12) {
        hours += 12; // Add 12 hours for PM (except for 12 PM)
    } else if (period.toUpperCase() === 'AM' && hours === 12) {
        hours = 0; // Convert 12 AM to 0 hours
    }

    // Format to 'HH:mm:ss'
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
};
