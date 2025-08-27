import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import MetaTagController from '@/components/MetaTagController/MetaTagController'

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative'>
      <MetaTagController />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
