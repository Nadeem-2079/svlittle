import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) setIsVisible(true)
      else setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: '#991B1B' }} // Darker red on hover
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed', bottom: '40px', right: '40px', zIndex: 1000,
              width: '56px', height: '56px', borderRadius: '50%',
              backgroundColor: '#DC2626', color: '#FFF9F0',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)',
              transition: 'background-color 0.2s'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="top-arrow-icon" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          button[aria-label="Scroll to top"] {
            width: 44px !important;
            height: 44px !important;
            bottom: 24px !important;
            right: 24px !important;
          }
          .top-arrow-icon {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
    </>
  )
}
