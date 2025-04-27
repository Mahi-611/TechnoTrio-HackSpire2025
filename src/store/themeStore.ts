import axios from 'axios';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  syncThemeWithBackend: (userId: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleDarkMode: async () => {
        const newDarkMode = !get().darkMode;
        set({ darkMode: newDarkMode });

        // Sync with backend
        const userId = 'current-user-id'; // Replace with actual user ID logic
        const theme = newDarkMode ? 'dark' : 'light';
        await axios.post(`/api/theme/${userId}`, { theme });
      },
      syncThemeWithBackend: async (userId: string) => {
        const response = await axios.get(`/api/theme/${userId}`);
        const theme = response.data.theme;
        set({ darkMode: theme === 'dark' });
      },
    }),
    { name: 'theme-storage' }
  )
);