export const getCookie = (name: string): string | null => {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(";");
    
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === " ") cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    
    return null;
};

// Example usage
// console.log(getCookie("username")); // Outputs: "john_doe" or null if not found