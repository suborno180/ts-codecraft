const isPhoneNumberValid = (phone: string): boolean => {
    const regex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return regex.test(phone);
};
export default isPhoneNumberValid