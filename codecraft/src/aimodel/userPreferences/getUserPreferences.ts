// Retrieves user preferences from storage

import { defaultPreferences, UserPreferences } from "./userPreferencesModel";

export function getUserPreferences(): UserPreferences {
    // Logic to fetch user preferences from a database or local storage
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : defaultPreferences;
}
