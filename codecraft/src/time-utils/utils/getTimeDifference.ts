const getTimeDifference = (time1: string, time2: string): { hours: number; minutes: number; seconds: number } => {
    const [h1, m1, s1] = time1.split(':').map(Number);
    const [h2, m2, s2] = time2.split(':').map(Number);
    
    const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
    const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;
    const diffInSeconds = Math.abs(totalSeconds2 - totalSeconds1);
    
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;
    
    return { hours, minutes, seconds };
};
export default getTimeDifference