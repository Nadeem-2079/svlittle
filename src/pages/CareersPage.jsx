import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Users, Briefcase, ChevronRight, Heart } from 'lucide-react'
import AestheticSVG from '../components/AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#F2EBE1', minHeight: '100vh', padding: '140px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      
      {/* SVGs for Aesthetics */}
      <AestheticSVG type="ARCH" style={{ top: '-5%', right: '-10%', width: '400px' }} opacity={0.6} rotate={15} />
      <AestheticSVG type="STAR" style={{ bottom: '20%', left: '5%', width: '80px' }} opacity={0.5} rotate={-20} />
      <AestheticSVG type="BLOB" style={{ bottom: '-15%', right: '-5%', width: '500px' }} opacity={0.4} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#4F634B', color: '#F2EBE1', 
            fontSize: '11px', fontWeight: '500', padding: '6px 16px', borderRadius: '100px',
            marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            <Heart size={14} /> Join Our Vision
          </span>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: '#2D3728', marginBottom: '24px', lineHeight: 1
          }}>
            Career <span style={{ fontStyle: 'italic', color: '#4F634B' }}>Opportunities</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#5B6C54', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, fontWeight: '400' }}>
            Join us to contribute to the quality of life of multiple children and adults. Both part-time and full-time positions are available.
          </p>
        </motion.div>

        {/* Roles Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ backgroundColor: '#E8EFE5', borderRadius: '32px', padding: '48px', border: '1px solid #D8E1D3', marginBottom: '40px' }}
        >
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', color: '#3E4F39', marginBottom: '12px' }}>Open Positions</h3>
            <div style={{ display: 'inline-block', backgroundColor: '#D8E1D3', color: '#4F634B', padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '500' }}>
              Freshers and experienced can apply.
            </div>
            <p style={{ fontSize: '14px', color: '#768A6A', marginTop: '16px' }}>Suitable candidates will be called for interview.</p>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { title: 'Occupational Therapist', icon: <Briefcase size={20} /> },
              { title: 'Speech Therapist', icon: <Users size={20} /> },
              { title: 'Receptionist', icon: <Phone size={20} /> }
            ].map((role) => (
              <div key={role.title} style={{ 
                backgroundColor: '#F2EBE1', borderRadius: '16px', padding: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: '1px solid #D8E1D3'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#C5D0BC', color: '#3E4F39', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {role.icon}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: '#2D3728' }}>
                    {role.title}
                  </div>
                </div>
                <ChevronRight color="#768A6A" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admin Contact Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            backgroundColor: '#3E4F39', color: '#F2EBE1', borderRadius: '24px', padding: '40px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
          }}
        >
          <h4 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', marginBottom: '8px' }}>Send your resume or call us</h4>
          <p style={{ fontSize: '14px', color: '#A8B89F', marginBottom: '32px' }}>Admin: M Subash Chellam, MBA</p>
          
          <a href="tel:+918110024552" style={{
            backgroundColor: '#F2EBE1', color: '#2D3728', display: 'flex', alignItems: 'center', gap: '12px',
            padding: '16px 40px', borderRadius: '100px', fontSize: '18px', fontWeight: '600', textDecoration: 'none',
            letterSpacing: '0.02em', border: '1px solid #F2EBE1', transition: 'all 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8EFE5'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F2EBE1'}
          >
            <Phone fill="#2D3728" size={20} /> +91-8110024552
          </a>
        </motion.div>

      </div>
    </div>
  )
}
