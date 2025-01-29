import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: true,
    login: () => {
        set({ isAuthenticated: true });
        console.log("Logged in!");
    },
    logout: () => {
        set({ isAuthenticated: false });
        console.log("Logged out!");
    },
}));

export default useAuthStore;
