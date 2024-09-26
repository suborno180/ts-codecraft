export const isURLValid = (url: string): boolean => {
    const regex = /^(https?:\/\/)?([a-z0-9]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
    return regex.test(url);
};