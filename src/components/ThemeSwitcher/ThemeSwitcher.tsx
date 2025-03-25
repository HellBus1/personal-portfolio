import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'myDark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'myDark' ? 'myLight' : 'myDark')
  }

  return (
    <button className='border rounded-lg p-2' onClick={toggleTheme}>
      {theme === 'myDark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  )
}

export default ThemeSwitcher
