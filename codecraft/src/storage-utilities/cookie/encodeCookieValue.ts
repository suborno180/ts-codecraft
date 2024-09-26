export const encodeCookieValue = (value: string): string => {
    return encodeURIComponent(value);
};

// Example usage
// const encodedValue = encodeCookieValue("user@example.com");
// setCookie("userEmail", encodedValue); // Use encoded value for setting cookie