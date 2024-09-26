import { getCookie } from "./getCookie";

export const getDecodedCookie = (name: string): string | null => {
    const cookieValue = getCookie(name); // Use the previously defined `getCookie` function
    return cookieValue ? decodeURIComponent(cookieValue) : null;
};

// Example usage
// console.log(getDecodedCookie("username")); // Outputs the decoded value of the username cookie