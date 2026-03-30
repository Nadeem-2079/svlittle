import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" style={{ padding: '120px 24px', backgroundColor: '#F2EBE1', position: 'relative', overflow: 'hidden', width: '100%' }}>
      
      {/* Background SVGs */}
      <AestheticSVG type="ARCH" style={{ bottom: '-10%', left: '-5%', width: '300px' }} opacity={0.6} rotate={15} />
      <AestheticSVG type="STAR" style={{ top: '15%', right: '10%', width: '60px' }} opacity={0.7} rotate={45} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ 
            display: 'inline-block', backgroundColor: '#4F634B', color: '#F2EBE1', 
            fontSize: '11px', fontWeight: '500', padding: '6px 16px', borderRadius: '100px',
            marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>Reach Out</span>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            color: '#2D3728', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.02em'
          }}>
            Let's start the <span style={{ fontStyle: 'italic', color: '#4F634B' }}>conversation</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#5B6C54', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you are looking for an initial consultation or simply have a few questions, our team is here to listen and help your family.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px' }} className="contact-grid">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{ backgroundColor: '#E8EFE5', borderRadius: '24px', padding: '40px', border: '1px solid #D8E1D3' }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', color: '#3E4F39', marginBottom: '24px' }}>
                Clinic Details
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="tel:+918110024552" style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#C5D0BC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3E4F39', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '2px' }}>Call Us</div>
                    <div style={{ fontSize: '17px', color: '#2D3728', fontWeight: '500' }}>+91 81100 24552</div>
                  </div>
                </a>

                <a href="mailto:svlittleleapsters@gmail.com" style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#D8E1D3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F634B', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '2px' }}>Email Us</div>
                    <div style={{ fontSize: '17px', color: '#2D3728', fontWeight: '500', wordBreak: 'break-all' }}>svlittleleapsters<br/>@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#EAEFE4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5B6C54', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#768A6A', marginBottom: '2px' }}>Location</div>
                    <div style={{ fontSize: '16px', color: '#2D3728', lineHeight: 1.5 }}>Chennai, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{ flex: 1, backgroundColor: '#D8E1D3', borderRadius: '24px', overflow: 'hidden', minHeight: '220px', position: 'relative', border: '1px solid #C5D0BC' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', color: '#768A6A' }}>
                <MapPin size={32} opacity={0.4} />
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '500' }}>Google Map Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: '#3E4F39', borderRadius: '32px', padding: '48px 40px', color: '#F2EBE1', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', marginBottom: '8px' }}>Send a Message</h3>
            <p style={{ fontSize: '14px', color: '#A8B89F', marginBottom: '32px' }}>We typically respond within 24 hours.</p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#C5D0BC', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
                <input type="text" placeholder="Sarah Smith" style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.08)', border: '1px solid rgba(197, 208, 188, 0.2)',
                  borderRadius: '12px', padding: '14px 18px', color: '#F2EBE1', fontSize: '15px', outline: 'none'
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#C5D0BC', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                <input type="email" placeholder="sarah@example.com" style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.08)', border: '1px solid rgba(197, 208, 188, 0.2)',
                  borderRadius: '12px', padding: '14px 18px', color: '#F2EBE1', fontSize: '15px', outline: 'none'
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', color: '#C5D0BC', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How can we help?</label>
                <textarea rows="4" placeholder="Tell us more about your child..." style={{
                  backgroundColor: 'rgba(242, 235, 225, 0.08)', border: '1px solid rgba(197, 208, 188, 0.2)',
                  borderRadius: '12px', padding: '14px 18px', color: '#F2EBE1', fontSize: '15px', outline: 'none', resize: 'vertical'
                }} />
              </div>

              <button type="submit" style={{
                marginTop: '12px', backgroundColor: '#F2EBE1', color: '#2D3728',
                padding: '16px 32px', borderRadius: '100px', fontSize: '14px', fontWeight: '600',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s'
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
    </section>
  )
}
