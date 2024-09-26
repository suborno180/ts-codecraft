export const deleteCookie = (name: string, path: string = "/"): void => {
    document.cookie = `${name}=; Max-Age=-99999999; path=${path}`;
};

// Example usage
// deleteCookie("username"); // Deletes the username cookie