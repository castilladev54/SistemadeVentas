import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create(() => ({
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
  cerrarSesion: async () => {
    await supabase.auth.signOut();
  },
}));
