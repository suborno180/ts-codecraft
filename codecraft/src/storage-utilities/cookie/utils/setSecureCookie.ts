const setSecureCookie = (
    name: string,
    value: string,
    days?: number,
    path: string = "/",
    sameSite: "Strict" | "Lax" | "None" = "Strict"
): void => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    const secure = sameSite === "None" ? "; Secure" : "";
    document.cookie = `${name}=${value || ""}${expires}; path=${path}; SameSite=${sameSite}${secure}`;
};
export default setSecureCookie
// Example usage
// setSecureCookie("secureToken", "abc123", 7, "/", "Strict"); // Secure cookie with 'SameSite=Strict'