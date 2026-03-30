import React from 'react'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = {
  services: [{name: 'Speech Therapy', path: '/#services'}, {name: 'Occupational Therapy', path: '/#services'}, {name: 'Feeding Therapy', path: '/#services'}],
  company: [{name: 'About Us', path: '/#about'}, {name: 'Careers / Hiring', path: '/careers'}, {name: 'Contact', path: '/#contact'}],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2D3728', color: '#F2EBE1', padding: '100px 24px 40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
          gap: '64px', marginBottom: '80px',
        }} className="footer-grid">

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', fontWeight: '400', color: '#F2EBE1', letterSpacing: '-0.02em' }}>
                Soul<span style={{ fontSize: '15px', marginLeft: '6px', opacity: 0.7, fontFamily: "'Inter', sans-serif" }}>Therapy</span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#C5D0BC', lineHeight: 1.7, marginBottom: '32px', maxWidth: '280px' }}>
              We specialise in active, evidence-based therapy approached in a comfortable, family-centred environment.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#A8B89F', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Heart size={14} fill="#A8B89F" color="#A8B89F" />
              <span>Dedicated to every child</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', color: '#D8E1D3' }}>
              Services
            </h4>
            {links.services.map(l => (
              <a key={l.name} href={l.path} style={{
                display: 'block', fontSize: '14px', color: '#A8B89F',
                textDecoration: 'none', marginBottom: '16px',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#F2EBE1'}
                onMouseLeave={e => e.target.style.color = '#A8B89F'}
              >{l.name}</a>
            ))}
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', color: '#D8E1D3' }}>
              Company
            </h4>
            {links.company.map(l => {
              if (l.path.startsWith('/#')) {
                return (
                  <a key={l.name} href={l.path} style={{
                    display: 'block', fontSize: '14px', color: '#A8B89F',
                    textDecoration: 'none', marginBottom: '16px',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#F2EBE1'}
                    onMouseLeave={e => e.target.style.color = '#A8B89F'}
                  >{l.name}</a>
                )
              }
              return (
                <Link key={l.name} to={l.path} style={{
                  display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#F2EBE1',
                  textDecoration: 'none', marginBottom: '16px', fontWeight: '500',
                  transition: 'color 0.2s', backgroundColor: 'rgba(242, 235, 225, 0.1)', padding: '6px 12px', borderRadius: '8px', width: 'fit-content'
                }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(242, 235, 225, 0.2)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(242, 235, 225, 0.1)'}
                >
                  {l.name} <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4F634B' }} />
                </Link>
              )
            })}
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', color: '#D8E1D3' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <a href="tel:+918110024552" style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                textDecoration: 'none', color: '#F2EBE1', fontSize: '15px',
                fontFamily: "'Instrument Serif', serif", fontSize: '20px'
              }}>
                <Phone size={18} style={{ color: '#A8B89F' }} />
                +91 81100 24552
              </a>

              <a href="mailto:svlittleleapsters@gmail.com" style={{
                display: 'flex', justifyItems: 'center', gap: '12px',
                textDecoration: 'none', color: '#F2EBE1', fontSize: '14px',
              }}>
                <Mail size={16} style={{ color: '#A8B89F' }} />
                svlittleleapsters@gmail.com
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#A8B89F', fontSize: '13px', lineHeight: 1.5 }}>
                <MapPin size={16} style={{ flexShrink: 0 }} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#A8B89F', fontSize: '13px' }}>
                <Clock size={16} style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(197, 208, 188, 0.2)', paddingTop: '40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px'
        }}>
          <p style={{ fontSize: '13px', color: '#A8B89F' }}>
            © 2026 SV Little Leapsters Therapy Centre.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#A8B89F', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#A8B89F', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
