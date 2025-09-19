import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useThemeStore = create(
    persist(
        (set)=>({
            theme: 'light',
            toggleTheme: ()=> set((state)=>{
                const newTheme = state.theme === 'light' ? 'dark' : 'light';
                document.documentElement.classList.remove('dark', newTheme === 'dark');
                document.documentElement.classList.add(newTheme);
                return { theme: newTheme };
            })
        }),
        {
            name:"theme-Storage"
        }
    )
)