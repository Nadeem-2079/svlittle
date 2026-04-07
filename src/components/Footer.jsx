import React from 'react'
import { Mail, MapPin, Heart, Instagram, Linkedin, ExternalLink, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import AestheticSVG from './AestheticSVG.jsx'

const links = {
  services: [
    { name: 'Speech Therapy', path: '/#services' },
    { name: 'Occupational Therapy', path: '/#services' },
    { name: 'Feeding Therapy', path: '/#services' },
    { name: 'Sensory Integration', path: '/#services' }
  ],
  center: [
    { name: 'About Our Story', path: '/#about' },
    { name: 'Careers / Hiring', path: '/careers' },
    { name: 'Contact Us', path: '/#contact' },
    { name: 'Clinical Gallery', path: '/#gallery' }
  ],
}

export default function Footer() {
  const googleReviewLink = "https://www.google.com/search?sca_esv=a0464d9551b247bc&sxsrf=ANbL-n5gA4NzbE2N28CeIspKmjVKogBLnw:1775585636180&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZVu9Ct4kRJlaIvMI6DGekn5VgpCPl7P4IaINThxuMTdEeoMpqvB2n0PGUdemqMS4XAJTsqfzwj6jcltQPzemGslbxPlr2kmw4vBt1XcYri03HdQjY2HP1eKY9Dprtm2-4fdID4%3D&q=SV+Little+Leapsters+therapy+centre+Reviews&sa=X&ved=2ahUKEwiQrvL4q9yTAxVfZWwGHcl6BqEQ0bkNegQIQxAH&biw=1528&bih=732&dpr=1.25";

  return (
    <footer style={{ 
      backgroundColor: '#FFF9F0', // Base background to isolate the rounded box
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Premium Floating Card Container */}
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        backgroundColor: '#111827', // Deep Navy Finish
        color: '#FFF9F0',
        borderRadius: '50px', // Signature Rounded Corners
        padding: '100px 80px 40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>

        {/* Artistic Background Layering */}
        <AestheticSVG type="TEDDY" style={{ bottom: '-30px', right: '5%', width: '180px' }} opacity={0.05} color="#DC2626" />
        <AestheticSVG type="TOY_BLOCKS" style={{ top: '60px', left: '2%', width: '140px' }} opacity={0.03} color="#FFF9F0" rotate={-15} />

        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(300px, 1.5fr) 1fr 1fr 1.5fr',
          gap: '64px', marginBottom: '80px', position: 'relative', zIndex: 10
        }} className="footer-grid">

          {/* 1. Brand Identity */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '32px' }}>
              <Link to="/">
                <img src="/web logo.png" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
              </Link>
            </div>
            <p style={{ 
              fontSize: '15px', color: '#9CA3AF', lineHeight: 1.8, 
              marginBottom: '40px', maxWidth: '320px', fontWeight: '500' 
            }}>
              Family-centered therapeutic excellence helping children bridge developmental gaps with science-backed compassionate care.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Instagram size={20} color="#DC2626" style={{ cursor: 'pointer' }} />
              <Linkedin size={20} color="#DC2626" style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* 2. Specialties */}
          <div>
            <h4 style={{ 
              fontFamily: "'Instrument Serif', serif", fontSize: '24px', 
              color: '#DC2626', marginBottom: '32px', fontStyle: 'italic'
            }}>
              Specialties
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {links.services.map(l => (
                <a key={l.name} href={l.path} style={{ 
                  fontSize: '15px', color: '#D1D5DB', textDecoration: 'none', 
                  transition: 'color 0.2s', fontWeight: '500' 
                }} onMouseEnter={e => e.target.style.color = '#FFF9F0'} onMouseLeave={e => e.target.style.color = '#D1D5DB'}>
                  {l.name}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Center Navigation */}
          <div>
            <h4 style={{ 
              fontFamily: "'Instrument Serif', serif", fontSize: '24px', 
              color: '#DC2626', marginBottom: '32px', fontStyle: 'italic'
            }}>
              The Center
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {links.center.map(l => (
                <Link key={l.name} to={l.path} style={{ 
                  fontSize: '15px', color: '#D1D5DB', textDecoration: 'none', 
                  transition: 'color 0.2s', fontWeight: '500' 
                }} onMouseEnter={e => e.target.style.color = '#FFF9F0'} onMouseLeave={e => e.target.style.color = '#D1D5DB'}>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Professional Connection */}
          <div>
            <h4 style={{ 
              fontFamily: "'Instrument Serif', serif", fontSize: '24px', 
              color: '#DC2626', marginBottom: '32px', fontStyle: 'italic'
            }}>
              Connection
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="mailto:svlittleleapsters@gmail.com" style={{ 
                color: '#FFF9F0', textDecoration: 'none', display: 'flex', 
                gap: '12px', alignItems: 'center', fontSize: '15px', fontWeight: '600' 
              }}>
                <Mail size={18} color="#DC2626" /> svlittleleapsters@gmail.com
              </a>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#D1D5DB' }}>
                <MapPin size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '14px', lineHeight: 1.6 }}>595, 1st Block, Valliammai Street, Mogappair West, Chennai — 600037</span>
              </div>
              
              {/* Premium Google Review Link */}
              <a href={googleReviewLink} target="_blank" rel="noopener noreferrer" style={{
                marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid #DC2626',
                padding: '16px 24px', borderRadius: '16px', color: '#FFF9F0',
                fontSize: '14px', fontWeight: '800', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.3s'
              }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)'}>
                <Star size={18} fill="#DC2626" color="transparent" /> Review us on Google
              </a>
            </div>
          </div>

        </div>

        {/* Re-designed Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          position: 'relative', zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#9CA3AF' }}>
            <Heart size={14} fill="#DC2626" color="transparent" />
            <span>© 2026 SV Little Leapsters. All rights reserved.</span>
          </div>

          <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Digital Partner</span>
            <a href="https://www.ausdauergroups.in" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '4px', 
              color: '#FFF9F0', fontWeight: '800', textDecoration: 'none', transition: 'color 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.color = '#DC2626'} onMouseLeave={e => e.currentTarget.style.color = '#FFF9F0'}>
              AUSDAUER GROUPS <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          footer { padding: 40px 16px !important; }
          div[style*="borderRadius: '50px'"] { padding: 60px 32px 32px !important; borderRadius: '32px' !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  )
}
