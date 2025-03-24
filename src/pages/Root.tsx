import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
