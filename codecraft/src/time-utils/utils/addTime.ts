const addTime = (time: string, hours: number = 0, minutes: number = 0, seconds: number = 0): string => {
    const [h, m, s] = time.split(':').map(Number);
    const totalSeconds = h * 3600 + m * 60 + s + hours * 3600 + minutes * 60 + seconds;
    
    const newHours = Math.floor(totalSeconds / 3600) % 24;
    const newMinutes = Math.floor((totalSeconds % 3600) / 60);
    const newSeconds = totalSeconds % 60;
    
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
};
export default addTime 