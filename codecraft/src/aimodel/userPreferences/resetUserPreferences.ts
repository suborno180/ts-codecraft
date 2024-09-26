import { UserPreferences } from "./userPreferencesModel";

// Default preferences object
const defaultPreferences: UserPreferences = {
    theme: 'light',
    language: 'en',
    notificationsEnabled: true,
};

// Resets user preferences to default values
export function resetUserPreferences(): void {
    localStorage.setItem('userPreferences', JSON.stringify(defaultPreferences));
}
