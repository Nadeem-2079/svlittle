import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactPage() {
  return (
    <div style={{ padding: '140px 24px 80px', backgroundColor: '#F2EBE1' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            display: 'inline-block', backgroundColor: '#4F634B', color: '#F2EBE1', 
            fontSize: '11px', fontWeight: '500', padding: '6px 16px', borderRadius: '100px',
            marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>Reach Out</span>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            color: '#2D3728', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.02em'
          }}>
            Let's start the <span style={{ fontStyle: 'italic', color: '#4F634B' }}>conversation</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#5B6C54', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you are looking for an initial consultation or simply have a few questions, our team is here to listen and guide you.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px' }} className="contact-grid">
          
          {/* Left: Contact Info & Map placeholder */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ backgroundColor: '#E8EFE5', borderRadius: '24px', padding: '40px', border: '1px solid #D8E1D3' }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: '#3E4F39', marginBottom: '24px' }}>
                Clinic Details
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="tel:+918110024552" style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#C5D0BC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3E4F39', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '4px' }}>Call Us</div>
                    <div style={{ fontSize: '16px', color: '#2D3728', fontWeight: '500' }}>+91 81100 24552</div>
                  </div>
                </a>

                <a href="mailto:svlittleleapsters@gmail.com" style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D8E1D3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F634B', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '4px' }}>Email Us</div>
                    <div style={{ fontSize: '16px', color: '#2D3728', fontWeight: '500', wordBreak: 'break-all' }}>svlittleleapsters<br/>@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EAEFE4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5B6C54', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '4px' }}>Visit Us</div>
                    <div style={{ fontSize: '15px', color: '#2D3728', lineHeight: 1.5 }}>
                      Chennai, Tamil Nadu, India<br/>
                      <span style={{ fontSize: '13px', color: '#768A6A' }}>(Full address provided upon booking)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{ flex: 1, backgroundColor: '#D8E1D3', borderRadius: '24px', overflow: 'hidden', minHeight: '240px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', color: '#768A6A' }}>
                <MapPin size={32} opacity={0.5} />
                <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interactive Map Area</span>
              </div>
            </div>

          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{
            backgroundColor: '#4F634B', borderRadius: '32px', padding: '48px 40px', color: '#F2EBE1'
          }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', marginBottom: '8px' }}>Send a Message</h3>
            <p style={{ fontSize: '14px', color: '#C5D0BC', marginBottom: '32px' }}>We typically respond within 24 hours.</p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#D8E1D3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
                <input type="text" placeholder="e.g. Sarah Smith" style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.1)', border: '1px solid rgba(197, 208, 188, 0.3)',
                  borderRadius: '12px', padding: '14px 16px', color: '#F2EBE1', fontSize: '15px', outline: 'none'
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#D8E1D3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                <input type="email" placeholder="sarah@example.com" style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.1)', border: '1px solid rgba(197, 208, 188, 0.3)',
                  borderRadius: '12px', padding: '14px 16px', color: '#F2EBE1', fontSize: '15px', outline: 'none'
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#D8E1D3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                <textarea rows="4" placeholder="How can we help your family?" style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.1)', border: '1px solid rgba(197, 208, 188, 0.3)',
                  borderRadius: '12px', padding: '14px 16px', color: '#F2EBE1', fontSize: '15px', outline: 'none', resize: 'vertical'
                }} />
              </div>

              <button type="submit" style={{
                marginTop: '12px', backgroundColor: '#F2EBE1', color: '#2D3728',
                padding: '16px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '500',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: 'none', cursor: 'pointer', transition: 'background-color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8EFE5'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F2EBE1'}>
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
