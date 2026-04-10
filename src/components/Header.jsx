import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'About', path: '/#about' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const menuVariants = {
    closed: { x: '100%', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    open: { 
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      backgroundColor: isScrolled || isMenuOpen ? 'rgba(255, 249, 240, 0.98)' : 'transparent',
      backdropFilter: isScrolled || isMenuOpen ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(220, 38, 38, 0.08)' : 'none',
      padding: isScrolled ? '12px 24px' : '20px 24px'
    }}>
      
      {/* DESKTOP SIGNATURE HEADER (1025px+) */}
      <div className="desktop-header-layout" style={{ 
        maxWidth: '1400px', margin: '0 auto', 
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', 
        alignItems: 'center' 
      }}>
        
        {/* LEFT: PILL NAV LINKS */}
        <nav style={{ display: 'flex', gap: '12px' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="nav-pill"
              style={{
                fontSize: '12px', fontWeight: '800', color: '#111827', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.08em', 
                padding: '8px 20px', borderRadius: '100px',
                border: '1px solid #FFD6D6', backgroundColor: '#FFFFFF',
                transition: 'all 0.3s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CENTER: LOGO */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/">
            <img 
              src="/web logo.png" 
              alt="SV Little Leapsters" 
              style={{ height: isScrolled ? '50px' : '64px', transition: 'all 0.4s ease', objectFit: 'contain' }} 
            />
          </Link>
        </div>

        {/* RIGHT: BUTTONS */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'transparent', color: '#111827', border: '1px solid #DC2626',
              padding: '10px 24px', borderRadius: '100px', fontSize: '12px', fontWeight: '800',
              textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', transition: 'all 0.3s'
            }} onMouseEnter={e => { e.target.style.backgroundColor = '#DC2626'; e.target.style.color = '#FFF9F0' }} onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#111827' }}>
              Contact
            </button>
          </a>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#DC2626', color: '#FFF9F0', border: 'none',
              padding: '10px 24px', borderRadius: '100px', fontSize: '12px', fontWeight: '800',
              textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.12)', transition: 'all 0.3s'
            }} onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
              Book a Consultation
            </button>
          </a>
        </div>
      </div>

      {/* MOBILE COMPACT HEADER (Under 1024px) */}
      <div className="mobile-header-layout" style={{ 
        display: 'none', alignItems: 'center', justifyContent: 'space-between' 
      }}>
        <Link to="/">
          <img src="/web logo.png" alt="Logo" style={{ height: '44px', objectFit: 'contain' }} />
        </Link>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ backgroundColor: 'transparent', border: 'none', color: '#DC2626', padding: '10px' }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE SIDE DRAWER (Half-Opening) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.4)',
                backdropFilter: 'blur(4px)', zIndex: 998
              }}
            />

            {/* Side Drawer Content */}
            <motion.div
              initial="closed" animate="open" exit="closed" variants={menuVariants}
              style={{
                position: 'fixed', top: 0, right: 0, width: '75vw', height: '100vh',
                backgroundColor: '#FFF9F0', zIndex: 999, padding: '40px 40px 100px 40px', // Increased bottom padding to lift content
                display: 'flex', flexDirection: 'column',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
                overflowY: 'auto'
              }}
            >
              {/* Internal Close Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ backgroundColor: 'transparent', border: 'none', color: '#DC2626', padding: '10px' }}
                >
                  <X size={32} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link 
                      to={link.path}
                      style={{
                        fontSize: '24px', fontWeight: '800', color: '#111827', textDecoration: 'none',
                        textTransform: 'uppercase', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px'
                      }}
                    >
                      {link.name} <ArrowRight size={20} color="#DC2626" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons: Shifted Up from the absolute bottom */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="tel:+918110024552" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%', backgroundColor: 'transparent', color: '#111827', border: '1px solid #DC2626',
                    padding: '16px', borderRadius: '12px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase'
                  }}>
                    Call Now
                  </button>
                </a>
                <a href="#contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%', backgroundColor: '#DC2626', color: '#FFF9F0', border: 'none',
                    padding: '16px', borderRadius: '12px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase'
                  }}>
                    Book a Consultation
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-pill:hover {
          background-color: #DC2626 !important;
          color: #FFF9F0 !important;
          border-color: #DC2626 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.1);
        }
        @media (max-width: 1024px) {
          .desktop-header-layout { display: none !important; }
          .mobile-header-layout { display: flex !important; }
          header { padding: 12px 20px !important; }
        }
      `}</style>
    </header>
  )
}
