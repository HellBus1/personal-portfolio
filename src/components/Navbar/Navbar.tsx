import { NavbarRouteName } from '@/constants/RouteName'
import { IoIosHome, IoIosPerson } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import packageJson from '../../../package.json'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const NavbarRouteAsset: { [key: string]: JSX.Element } = {
  '/': <IoIosHome size={20} />,
  '/about': <IoIosPerson size={20} />
}

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <div className='flex justify-between items-center fixed top-0 left-0 right-0 px-4 py-4 md:px-24 z-50'>
      <div className='flex-1'>
        <ThemeSwitcher />
      </div>
      <div className='flex'>
        <ul className='menu menu-horizontal bg-base-200 rounded-box space-x-2'>
          {Object.entries(NavbarRouteName).map(([key, path]) => (
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
          ))}
        </ul>
      </div>
      <div className='flex-1 flex justify-end'>
        <div className='badge badge-primary text-sm p-3'>v{packageJson.version}</div>
      </div>
    </div>
  )
}

export default Navbar
