import { create } from 'zustand';

interface PortfolioState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  isDarkMode: false, // Default light theme - white background matching logo
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));