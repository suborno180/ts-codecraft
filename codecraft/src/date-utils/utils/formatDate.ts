type DateFormatOption = 'YYYY-MM-DD' | 'MM-DD-YYYY' | 'DD-MM-YYYY' | 'YYYY/MM/DD' | 'MM/DD/YYYY' | 'DD/MM/YYYY' | string;

export const formatDate = (date: Date, format: DateFormatOption): string => {
    const map: { [key: string]: string } = {
        'YYYY': date.getFullYear().toString(),
        'MM': (date.getMonth() + 1).toString().padStart(2, '0'), // Months are 0-based
        'DD': date.getDate().toString().padStart(2, '0'),
        'HH': date.getHours().toString().padStart(2, '0'),
        'mm': date.getMinutes().toString().padStart(2, '0'),
        'ss': date.getSeconds().toString().padStart(2, '0'),
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
};

export default formatDate