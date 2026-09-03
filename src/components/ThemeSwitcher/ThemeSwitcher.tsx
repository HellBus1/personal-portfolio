import { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'myDark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'myDark' ? 'myLight' : 'myDark')
  }

  const isDark = theme === 'myDark'

  return (
    <button
      onClick={toggleTheme}
      className='flex items-center justify-center w-9 h-9 rounded-lg border border-base-content/10 bg-base-200/50 hover:bg-base-200 text-neutral-content hover:text-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <IoSunnyOutline
          size={18}
          className='transition-transform duration-200 rotate-0 hover:rotate-45'
        />
      ) : (
        <IoMoonOutline
          size={18}
          className='transition-transform duration-200 -rotate-12 hover:rotate-0'
        />
      )}
    </button>
  )
}

export default ThemeSwitcher
