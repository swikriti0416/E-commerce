import { FaSun, FaMoon } from "react-icons/fa"
import { useState } from "react"

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default DarkMode
