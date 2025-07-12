import { useEffect, useRef, useState } from 'react'
import { NavbarRouteName, RouteName } from '@/constants/RouteName'
import { IoIosApps, IoIosHome, IoIosPerson } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import packageJson from '../../../package.json'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { IoDocument } from 'react-icons/io5'

const NavbarRouteAsset: { [key: string]: JSX.Element } = {
  [RouteName.HOME]: <IoIosHome size={20} />,
  [RouteName.PROJECTS]: <IoIosApps size={20} />,
  [RouteName.ARTICLES]: <IoDocument size={20} />, // Assuming articles are also under projects
  [RouteName.ABOUT]: <IoIosPerson size={20} />
}

const NAVBAR_ORDER = [RouteName.HOME, RouteName.PROJECTS, RouteName.ARTICLES, RouteName.ABOUT]

const Navbar = () => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < 10
      if (isScrollingUp) {
        setVisible(true)
        lastScrollY.current = window.scrollY
        return
      }

      const isScrollingDown = window.scrollY > lastScrollY.current
      const isScrollingDownMoreThan200px = window.scrollY > 200
      if (isScrollingDown && isScrollingDownMoreThan200px) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'
      }`}
    >
      <div className='flex justify-between items-center px-4 py-4 md:px-24'>
        <div className='flex-1'>
          <ThemeSwitcher />
        </div>
        <div className='flex'>
          <ul className='menu menu-horizontal bg-base-200 rounded-box space-x-2'>
            {NAVBAR_ORDER.map((path) => {
              const key = (
                Object.keys(NavbarRouteName) as Array<keyof typeof NavbarRouteName>
              ).find((k) => NavbarRouteName[k] === path)
              if (!key) return null
              return (
                <li key={key}>
                  <Link
                    to={path}
                    role='tab'
                    className={`tab ${pathname === path ? 'tab-active' : ''} tooltip tooltip-bottom`}
                    data-tip={key.charAt(0) + key.slice(1).toLowerCase()}
                  >
                    {NavbarRouteAsset[path]}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex-1 flex justify-end'>
          <div className='badge badge-primary text-sm p-3'>v{packageJson.version}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
