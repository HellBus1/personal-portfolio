import RootLayout from '@/components/RootLayout/RootLayout'

const NotFoundPage = () => {
  return (
    <RootLayout>
      <div className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
        <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
        <p className='mb-6 text-neutral-content/80'>
          Sorry, the page you are looking for does not exist.
        </p>
        <a href='/' className='btn btn-primary'>
          Back to Home
        </a>
      </div>
    </RootLayout>
  )
}

export default NotFoundPage
