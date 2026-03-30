import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Services', path: '/#services' },
    { label: 'About', path: '/#about' },
    { label: 'Careers', path: '/careers' },
  ]

  // Helper to handle hash routing or page routing cleanly
  const NavItem = ({ label, path, isMobile }) => {
    const isActive = location.pathname === path || location.hash === path.substring(1);

    // Default desktop styles
    let baseStyles = {
      fontSize: '13px', fontWeight: '500', color: isActive ? '#2D3728' : '#3E4F39',
      textDecoration: 'none', padding: '6px 12px', transition: 'all 0.2s ease',
    }

    // Mobile specific overrides
    if (isMobile) {
      baseStyles = {
        display: 'block', fontSize: '24px', fontFamily: "'Instrument Serif', serif",
        color: '#F2EBE1', textDecoration: 'none',
      }
    }

    if (path.includes('#')) {
      return (
        <a href={path} style={baseStyles} onClick={() => isMobile && setMenuOpen(false)}>
          {label}
        </a>
      )
    }

    return (
      <Link to={path} style={baseStyles} onClick={() => isMobile && setMenuOpen(false)}>
        {label}
      </Link>
    )
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(242, 235, 225, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(197, 208, 188, 0.4)' : '1px solid transparent',
        padding: '16px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="SV Little Leapsters Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav - Pill shaped, bordered block */}
        <nav style={{
          alignItems: 'center', gap: '2px',
          border: '1px solid #C5D0BC', borderRadius: '100px',
          padding: '6px 20px', backgroundColor: 'rgba(242, 235, 225, 0.5)'
        }} className="hidden md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.label} label={link.label} path={link.path} isMobile={false} />
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ alignItems: 'center', gap: '12px' }} className="hidden md:flex">
          <Link to="/#contact" style={{
            color: '#3E4F39', padding: '10px 20px', borderRadius: '100px',
            fontSize: '14px', fontWeight: '500', textDecoration: 'none',
            border: '1px solid #C5D0BC', background: 'transparent'
          }}>
            Contact Us
          </Link>
          <a href="tel:+918110024552" style={{
            backgroundColor: '#4F634B', color: '#F2EBE1',
            padding: '10px 24px', borderRadius: '100px',
            fontSize: '14px', fontWeight: '500', textDecoration: 'none',
            border: '1px solid #4F634B'
          }}>
            Book in
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2D3728' }}
          className="flex md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          backgroundColor: '#3E4F39', color: '#F2EBE1',
          padding: '24px', height: '100vh',
          display: 'flex', flexDirection: 'column', gap: '24px'
        }}>
          {navLinks.map((link) => (
            <NavItem key={link.label} label={link.label} path={link.path} isMobile={true} />
          ))}
          
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link 
              to="/#contact" 
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#F2EBE1', padding: '16px', borderRadius: '100px',
                fontSize: '18px', fontWeight: '500', textDecoration: 'none',
                border: '1px solid rgba(242, 235, 225, 0.2)', textAlign: 'center'
              }}
            >
              Contact Us
            </Link>
            <a 
              href="tel:+918110024552" 
              style={{
                backgroundColor: '#F2EBE1', color: '#2D3728',
                padding: '16px', borderRadius: '100px',
                fontSize: '18px', fontWeight: '600', textDecoration: 'none',
                border: '1px solid #F2EBE1', textAlign: 'center'
              }}
            >
              Book in
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
