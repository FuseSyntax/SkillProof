import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      setAuth: (user, token) =>
        set({
          user,
          isAuthenticated: true,
          token,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          token: null,
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

