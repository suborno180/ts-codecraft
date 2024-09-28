import getCookie from "./getCookie";

const getDecodedCookie = (name: string): string | null => {
    const cookieValue = getCookie(name); // Use the previously defined `getCookie` function
    return cookieValue ? decodeURIComponent(cookieValue) : null;
};

export default getDecodedCookie

// Example usage
// console.log(getDecodedCookie("username")); // Outputs the decoded value of the username cookie