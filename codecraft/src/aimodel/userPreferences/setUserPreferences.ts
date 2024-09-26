import { UserPreferences } from "./userPreferencesModel";

// Saves user preferences to storage
export function setUserPreferences(preferences: UserPreferences): void {
    // Logic to save user preferences to a database or local storage
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}
