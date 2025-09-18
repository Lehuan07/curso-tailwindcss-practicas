import {useThemeStore} from "../store/useThemeStore"

export const Home = () => {
    const {theme, toggleTheme} = useThemeStore()
    return (
        <section className="bg-amber-50 h-screen dark:bg-dark">
            Home
            <button className="p-2 rounded-lg bg-white dark:bg-dark" onClick={toggleTheme}>
                {theme==="light"?"🌞 Modo claro":"🌚 Modo oscuro"}
            </button>
            </section>
    )
}