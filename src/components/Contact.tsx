import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'karthikasapu21@gmail.com',
    href: 'mailto:karthikasapu21@gmail.com',
    bgColor: 'bg-purple-700 hover:bg-purple-600',
    glow: 'rgba(168, 85, 247, 0.5)',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Venkata Veera Hanuma Karthik Asapu',
    href: 'https://www.linkedin.com/in/venkata-veera-hanuma-karthik-asapu-78ba6a256/',
    bgColor: 'bg-[#0077b5] hover:bg-[#00669c]',
    glow: 'rgba(0, 119, 181, 0.5)',
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'Asapukarthik',
    href: 'https://github.com/Asapukarthik',
    bgColor: 'bg-white/5 border border-white/10 hover:bg-white/10',
    glow: 'rgba(255, 255, 255, 0.25)',
    external: true,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 7396242902',
    href: 'tel:+917396242902',
    bgColor: 'bg-emerald-700 hover:bg-emerald-600',
    glow: 'rgba(16, 185, 129, 0.5)',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

function Contact() {
  const [activeMethod, setActiveMethod] = useState(null)

  // ─── Contact Form States ───
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  })

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Real-time client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, and Message).'
      })
      return
    }

    setStatus({ submitting: true, success: false, error: null })

    // Replace the placeholder below with your real Formspree Form ID!
    // Simply sign up for free at https://formspree.io/, create a form, and copy the Form ID here.
    const FORMSPREE_FORM_ID: string = 'xeedqzbv'

    if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
      // If they haven't set up their ID yet, we'll simulate the successful submission 
      // but remind them in a beautiful alert that they need to insert their ID to receive emails.
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: true,
          error: 'Demo Mode: Message captured! To receive real emails in your inbox, replace "YOUR_FORMSPREE_FORM_ID" in src/components/Contact.jsx with your actual Formspree ID.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 1000)
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: null
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Something went wrong. Please check your connection and try again.'
      })
    }
  }

  return (
    <section id="contact" className="section-container flex min-h-screen items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="mb-16 text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-heading-line" />
          <p className="mx-auto max-w-xl text-slate-400 text-base mt-2">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 relative overflow-hidden group"
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.45)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(139, 92, 246, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Double Blurred Ambient Glows */}
            <div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-70 pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 70%)' }}
            />
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-50 pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%)' }}
            />

            <h3 className="mb-10 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">
              CONTACT METHOD ICONS
            </h3>

            <div className="flex flex-row justify-center items-center gap-5 sm:gap-6 mb-10 w-full">
              {contactLinks.map((item) => {
                const Wrapper = item.href ? 'a' : 'div'
                const wrapperProps = item.href
                  ? {
                    href: item.href,
                    ...(item.external ? { target: '_blank', rel: 'noreferrer' } : {}),
                  }
                  : {}

                return (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Wrapper
                      {...wrapperProps}
                      className={`relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[1.1rem] transition-all duration-300 ${item.bgColor} shadow-lg hover:scale-110 cursor-pointer`}
                      style={{
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 25px ${item.glow}`;
                        setActiveMethod(item);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        setActiveMethod(null);
                      }}
                    >
                      <item.icon className="text-[1.5rem] sm:text-[1.85rem] text-white" />
                    </Wrapper>
                  </motion.div>
                )
              })}
            </div>

            {/* Dynamic Active Description text */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeMethod ? activeMethod.label : 'default'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs sm:text-sm font-semibold tracking-wide text-purple-400 text-center px-4"
                >
                  {activeMethod ? `${activeMethod.label}: ${activeMethod.value}` : 'Hover an icon to get in touch'}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 relative overflow-hidden group"
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.45)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(139, 92, 246, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Double Blurred Ambient Glows */}
            <div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-70 pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 70%)' }}
            />
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-50 pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%)' }}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="form-input"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="form-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message... *"
              required
              rows={5}
              className="form-input resize-none"
            />

            {/* Status alerts */}
            {status.error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                {status.error ? status.error : 'Message sent successfully! Thank you. ✨'}
              </div>
            )}

            <MagneticButton
              type="submit"
              disabled={status.submitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
              <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" size={16} />
            </MagneticButton>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
