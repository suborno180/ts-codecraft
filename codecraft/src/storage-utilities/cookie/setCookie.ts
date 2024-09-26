export const setCookie = (
    name: string,
    value: string,
    days?: number,
    path: string = "/"
): void => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=${path}`;
};

// Example usage
// setCookie("username", "john_doe", 7); // Cookie expires in 7 days