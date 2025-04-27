import { FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section className='space-y-4'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>Get In Touch</h2>
      <p className='text-base text-neutral-content/80'>
        Whether you want to discuss a project or just want to say hi, my inbox is always open.
      </p>
      <Link
        to='#'
        onClick={(e) => {
          window.location.href = 'mailto:syubbanfakhriya@gmail.com'
          e.preventDefault()
        }}
        className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary/90 transition-colors'
      >
        <FaEnvelope size={16} />
        Say Hello
      </Link>
    </section>
  )
}

export default ContactSection
