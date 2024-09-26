import { isLeapYear } from "./isLeapYear";

export const getDaysInYear = (year: number): number => {
    return isLeapYear(year) ? 366 : 365;
};