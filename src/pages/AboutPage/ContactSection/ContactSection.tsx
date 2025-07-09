import { useState } from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:mosmatter1@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section className='space-y-12'>
      <h2 className='text-2xl md:text-3xl font-bold text-neutral-content'>Get In Touch</h2>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Email Contact Card */}
        <div className='flex-1 bg-base-200 rounded-lg p-6 shadow space-y-6 max-w-lg flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-semibold flex items-center gap-2 mb-4'>
              <FaEnvelope /> Send me an Email
            </h3>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-neutral-content'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  className='mt-1 w-full px-3 py-2 rounded border border-base-300 bg-base-100 text-neutral-content'
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete='name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-neutral-content'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  required
                  className='mt-1 w-full px-3 py-2 rounded border border-base-300 bg-base-100 text-neutral-content'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete='email'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-neutral-content'>
                  Message
                </label>
                <textarea
                  id='message'
                  required
                  rows={4}
                  className='mt-1 w-full px-3 py-2 rounded border border-base-300 bg-base-100 text-neutral-content'
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type='submit'
                className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary/90 transition-colors'
                disabled={status === 'sending'}
              >
                <FaEnvelope size={16} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className='text-success text-sm mt-2'>
                  Your email client should open. If not, please email me directly!
                </p>
              )}
            </form>
          </div>
        </div>
        {/* Instagram & LinkedIn Contact Card */}
        <div className='flex-1 bg-base-200 rounded-lg p-6 shadow space-y-6 max-w-lg flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-semibold flex items-center gap-2 mb-4'>
              <FaInstagram className='text-pink-500' /> DM me on Instagram
            </h3>
            <p className='text-base text-neutral-content mb-4'>
              Prefer social? You can also reach out directly via Instagram or LinkedIn for a quick
              chat or collaboration.
            </p>
            <div className='flex flex-col gap-3 mb-6'>
              <a
                href='https://instagram.com/mattr.most'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-md font-medium hover:opacity-90 transition'
                aria-label='DM me on Instagram'
              >
                <FaInstagram size={18} />
                @mattr.most
              </a>
              <a
                href='https://linkedin.com/in/syubbanfakhriya'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition'
                aria-label='Connect on LinkedIn'
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
            <hr className='border-base-300 my-2' />
            <div className='text-sm text-neutral-content/80 mt-4'>
              <span>I'm active on both platforms and usually reply within a day.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
