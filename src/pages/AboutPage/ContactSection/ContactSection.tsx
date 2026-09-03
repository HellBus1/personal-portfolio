import { useState } from 'react'
import { IoMailOutline, IoLogoInstagram, IoLogoLinkedin, IoSendOutline } from 'react-icons/io5'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:hello@mattrmost.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section className='pt-8 border-t border-base-content/10'>
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-wider text-primary uppercase mb-1 block'>
          Let&apos;s Connect
        </span>
        <h2 className='text-2xl sm:text-3xl font-bold font-display text-neutral-content tracking-tight'>
          Get In Touch
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {/* Email Direct Form */}
        <div className='card-clean p-6 flex flex-col justify-between'>
          <div>
            <div className='flex items-center gap-2 text-primary mb-4 font-bold text-base'>
              <IoMailOutline size={18} />
              <span className='text-neutral-content'>Send a Message</span>
            </div>

            <form className='space-y-3.5' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-xs font-medium text-base-content/80 mb-1'
                >
                  Your Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  placeholder='e.g. Alex Morgan'
                  className='w-full px-3.5 py-2 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors'
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete='name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-xs font-medium text-base-content/80 mb-1'
                >
                  Your Email
                </label>
                <input
                  id='email'
                  type='email'
                  required
                  placeholder='alex@example.com'
                  className='w-full px-3.5 py-2 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete='email'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-xs font-medium text-base-content/80 mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  required
                  rows={3}
                  placeholder='Tell me about your project, questions, or ideas...'
                  className='w-full px-3.5 py-2 rounded-lg bg-base-100 border border-base-content/15 text-sm text-neutral-content placeholder:text-base-content/40 focus:outline-none focus:border-primary transition-colors resize-none'
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type='submit'
                className='btn-primary-custom w-full mt-2'
                disabled={status === 'sending'}
              >
                <IoSendOutline size={15} />
                <span>{status === 'sending' ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>

              {status === 'sent' && (
                <p className='text-xs text-primary font-medium text-center mt-2'>
                  Email client triggered. Feel free to email directly at hello@mattrmost.com
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Direct Channels */}
        <div className='card-clean p-6 flex flex-col justify-between'>
          <div>
            <div className='flex items-center gap-2 text-primary mb-4 font-bold text-base'>
              <span className='text-neutral-content'>Direct Channels</span>
            </div>

            <p className='text-xs sm:text-sm text-base-content/80 mb-6 leading-relaxed'>
              Prefer social messaging or professional networking? Reach out via LinkedIn or
              Instagram — I typically respond within 24 hours.
            </p>

            <div className='space-y-3'>
              <a
                href='https://linkedin.com/in/syubban'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-3.5 rounded-lg bg-base-300 border border-base-content/10 hover:border-primary/40 hover:bg-base-300/80 transition-all text-sm font-medium text-neutral-content group'
                aria-label='Connect on LinkedIn'
              >
                <div className='flex items-center gap-2.5'>
                  <IoLogoLinkedin size={20} className='text-[#0a66c2]' />
                  <span>LinkedIn Message</span>
                </div>
                <span className='text-xs text-primary group-hover:translate-x-0.5 transition-transform'>
                  Connect →
                </span>
              </a>

              <a
                href='https://instagram.com/mattr.most'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between p-3.5 rounded-lg bg-base-300 border border-base-content/10 hover:border-primary/40 hover:bg-base-300/80 transition-all text-sm font-medium text-neutral-content group'
                aria-label='DM on Instagram'
              >
                <div className='flex items-center gap-2.5'>
                  <IoLogoInstagram size={20} className='text-[#e1306c]' />
                  <span>Instagram Direct</span>
                </div>
                <span className='text-xs text-primary group-hover:translate-x-0.5 transition-transform'>
                  @mattr.most →
                </span>
              </a>
            </div>
          </div>

          <div className='mt-6 pt-4 border-t border-base-content/10 text-xs text-base-content/60 text-center sm:text-left'>
            Location: Jakarta, Indonesia (UTC+7)
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
