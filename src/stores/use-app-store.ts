import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
  isLoading: boolean;
  sidebarOpen: boolean;
  setLoading: (loading: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      isLoading: false,
      sidebarOpen: true,
      setLoading: (loading) => set({ isLoading: loading }),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    }),
    { name: 'AppStore' },
  ),
);