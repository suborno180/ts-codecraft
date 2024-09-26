export interface UserPreferences {
    theme: string; // e.g., 'light' or 'dark'
    language: string; // e.g., 'en' or 'es'
    notificationsEnabled: boolean; // true or false
}

export const defaultPreferences: UserPreferences = {
    theme: 'light',
    language: 'en',
    notificationsEnabled: true,
};