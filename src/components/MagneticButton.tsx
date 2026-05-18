import { useRef } from 'react'
import { motion } from 'framer-motion'

function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)

  const handleMouseMove = (event) => {
    const button = ref.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
  }

  const handleMouseLeave = () => {
    const button = ref.current
    if (!button) return
    button.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={`magnetic transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
