import { create } from 'zustand';

interface PortfolioState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  isDarkMode: true, // Default dark theme premium lagti hai
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));