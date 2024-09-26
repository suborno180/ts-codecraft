export const setCookieWithSameSite = (
    name: string,
    value: string,
    days?: number,
    path: string = "/",
    sameSite: "Strict" | "Lax" | "None" = "Lax"
): void => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=${path}; SameSite=${sameSite}`;
};

// Example usage
// setCookieWithSameSite("userSession", "xyz456", 5, "/", "Lax"); // Cookie with 'SameSite=Lax'