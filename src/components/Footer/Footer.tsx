import { NavbarRouteName } from '@/constants/RouteName'
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10'>
      <div className='flex w-full flex-col'>
        <div className='card rounded-box grid place-items-center'>
          <nav className='grid grid-flow-col gap-4 mb-8'>
            {Object.entries(NavbarRouteName).map(([key, path]) => (
              <Link key={key} to={path} role='tab' className={`link link-hover`}>
                <p className='font-medium'>{key.charAt(0) + key.slice(1).toLowerCase()}</p>
              </Link>
            ))}
          </nav>
          <nav>
            <div className='grid grid-flow-col gap-4'>
              <Link to={'https://github.com/HellBus1/'}>
                <SiGithub size={20} />
              </Link>
              <div className='mx-1'></div>
              <Link to={'https://www.linkedin.com/in/syubban/'}>
                <SiLinkedin size={20} />
              </Link>
              <div className='mx-1'></div>
              <Link to={'https://medium.com/@syubbanfakhriya/'}>
                <SiMedium size={20} />
              </Link>
            </div>
          </nav>
        </div>
        <div className='divider mx-10'></div>
        <div className='card rounded-box grid place-items-center'>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Syubban Fakhriya</p>
          </aside>
        </div>
      </div>
    </footer>
  )
}

export default Footer
