const Footer = () => {
  return (
    <footer className='footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-8'>
      <div className='flex w-full flex-col'>
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
