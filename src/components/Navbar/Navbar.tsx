import { useEffect, useRef, useState } from 'react'
import { RouteName } from '@/constants/RouteName'
import { Link, useLocation } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { IoMenu, IoClose } from 'react-icons/io5'
import { HiOutlineSparkles } from 'react-icons/hi2'

interface NavItem {
  name: string
  path: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: RouteName.HOME },
  { name: 'Projects', path: RouteName.PROJECTS },
  { name: 'Articles', path: RouteName.ARTICLES },
  { name: 'About', path: RouteName.ABOUT }
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(window.scrollY)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isNearTop = window.scrollY < 20
      if (isNearTop) {
        setVisible(true)
        lastScrollY.current = window.scrollY
        return
      }

      const isScrollingDown = window.scrollY > lastScrollY.current
      const isScrolledFar = window.scrollY > 150
      if (isScrollingDown && isScrolledFar) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16 pointer-events-none'
      }`}
    >
      <div className='nav-glass'>
        <div className='w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16'>
          {/* Left: Brand/Logo & Theme Switcher */}
          <div className='flex items-center gap-3'>
            <Link
              to={RouteName.HOME}
              className='font-display text-2xl font-bold text-neutral-content tracking-tight hover:text-primary transition-colors flex items-center gap-1.5'
            >
              <span>Syubban</span>
              <span className='inline-block w-1.5 h-1.5 rounded-full bg-primary mb-1' />
            </Link>
            <div className='h-4 w-px bg-base-content/15 mx-1 hidden sm:block' />
            <ThemeSwitcher />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className='hidden md:flex items-center gap-1 bg-base-200/60 p-1 rounded-full border border-base-content/10'>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-primary text-primary-content shadow-sm shadow-primary/25 font-semibold'
                      : 'text-neutral-content/80 hover:text-neutral-content hover:bg-base-content/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right CTA */}
          <div className='hidden md:flex items-center gap-3'>
            <a
              href='mailto:hello@mattrmost.com'
              className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-content text-xs font-semibold transition-all duration-150'
              aria-label='Contact Syubban'
            >
              <HiOutlineSparkles size={14} />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='flex items-center justify-center w-9 h-9 rounded-lg border border-base-content/10 bg-base-200/50 text-neutral-content hover:text-primary transition-colors'
              aria-label='Toggle navigation menu'
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className='md:hidden px-6 pb-6 pt-2 bg-base-100/95 border-b border-base-content/10 backdrop-blur-lg animate-fade-in'>
            <div className='flex flex-col gap-1.5'>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-content font-semibold'
                        : 'text-neutral-content/80 hover:bg-base-200'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className='w-1.5 h-1.5 rounded-full bg-primary-content' />}
                  </Link>
                )
              })}
              <div className='pt-2 mt-1 border-t border-base-content/10'>
                <a
                  href='mailto:hello@mattrmost.com'
                  className='flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-content text-sm font-semibold'
                >
                  <HiOutlineSparkles size={16} />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
