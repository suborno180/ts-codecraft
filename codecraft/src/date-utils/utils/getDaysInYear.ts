import { isLeapYear } from "./isLeapYear";

const getDaysInYear = (year: number): number => {
    return isLeapYear(year) ? 366 : 365;
};

export default getDaysInYear