import RootLayout from '@/components/RootLayout/RootLayout'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'

const NotFoundPage = () => {
  return (
    <RootLayout>
      <div className='flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-20'>
        <span className='font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-2'>
          Error 404
        </span>
        <h1 className='text-4xl sm:text-6xl font-bold font-display text-neutral-content mb-3'>
          Page Not Found
        </h1>
        <p className='text-sm sm:text-base text-base-content/80 max-w-md mb-8 leading-relaxed'>
          The resource or document you requested does not exist or may have been relocated.
        </p>
        <Link to='/' className='btn-primary-custom'>
          <IoHomeOutline size={16} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </RootLayout>
  )
}

export default NotFoundPage
