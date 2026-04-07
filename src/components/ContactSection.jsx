import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Sparkles, Star } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" style={{ padding: '140px 24px', backgroundColor: '#FFF9F0', position: 'relative', overflow: 'hidden', width: '100%' }}>
      
      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '10%', right: '5%', width: '180px' }} opacity={0.12} color="#DC2626" rotate={-5} />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '15%', left: '5%', width: '200px' }} opacity={0.10} color="#DC2626" />
      <AestheticSVG type="ROCKET" style={{ top: '50%', left: '-5%', width: '300px' }} opacity={0.08} color="#FFD6D6" rotate={10} />
      <AestheticSVG type="KIDS_HEART" style={{ bottom: '5%', right: '10%', width: '120px' }} opacity={0.15} color="#FFD6D6" rotate={15} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          style={{ textAlign: 'center', margin: '0 auto 80px auto' }}
        >
          <span style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B', 
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> GET IN TOUCH
          </span>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            color: '#111827', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: '800', textTransform: 'uppercase'
          }}>
            LET'S START THE <span style={{ color: '#DC2626' }}>CONVERSATION</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#4B5563', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you are looking for an initial consultation or simply have a few questions, our team is here to listen and help.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px' }} className="contact-grid">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <div style={{ 
              backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '48px', 
              border: '1px solid #FFD6D6', 
              boxShadow: '0 20px 40px rgba(220, 38, 38, 0.05)' 
            }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: '800', fontSize: '20px', color: '#111827', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Clinic Details
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <a href="https://wa.me/918110024552" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', textDecoration: 'none' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FFD6D6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', flexShrink: 0 }}>
                    <Phone size={22} fill="#991B1B" color="transparent" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280', marginBottom: '4px', fontWeight: '700' }}>WhatsApp Us</div>
                    <div style={{ fontSize: '18px', color: '#111827', fontWeight: '700' }}>+91 81100 24552</div>
                  </div>
                </a>

                <a href="mailto:svlittleleapsters@gmail.com" style={{ display: 'flex', gap: '20px', textDecoration: 'none' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FFD6D6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', flexShrink: 0 }}>
                    <Mail size={22} fill="#991B1B" color="transparent" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280', marginBottom: '4px', fontWeight: '700' }}>Email Us</div>
                    <div style={{ fontSize: '18px', color: '#111827', fontWeight: '700', wordBreak: 'break-all' }}>svlittleleapsters<br/>@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FFD6D6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', flexShrink: 0 }}>
                    <MapPin size={22} fill="#991B1B" color="transparent" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B7280', marginBottom: '4px', fontWeight: '700' }}>Main Center</div>
                    <div style={{ fontSize: '17px', color: '#111827', lineHeight: 1.5, fontWeight: '600' }}>
                      595, 1st Block, Valliammai Street,<br/>
                      Mogappair West, Chennai — 600037
                    </div>
                  </div>
                </div>

                {/* Google Review Redirect Section */}
                <a href="https://www.google.com/search?sca_esv=a0464d9551b247bc&sxsrf=ANbL-n5gA4NzbE2N28CeIspKmjVKogBLnw:1775585636180&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZVu9Ct4kRJlaIvMI6DGekn5VgpCPl7P4IaINThxuMTdEeoMpqvB2n0PGUdemqMS4XAJTsqfzwj6jcltQPzemGslbxPlr2kmw4vBt1XcYri03HdQjY2HP1eKY9Dprtm2-4fdID4%3D&q=SV+Little+Leapsters+therapy+centre+Reviews&sa=X&ved=2ahUKEwiQrvL4q9yTAxVfZWwGHcl6BqEQ0bkNegQIQxAH&biw=1528&bih=732&dpr=1.25" 
                   target="_blank" rel="noopener noreferrer"
                   style={{ 
                     display: 'flex', gap: '20px', textDecoration: 'none', 
                     backgroundColor: '#111827', padding: '24px', borderRadius: '20px', 
                     marginTop: '8px', transition: 'all 0.3s' 
                   }}
                   onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                   onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF9F0', flexShrink: 0 }}>
                    <Star size={22} fill="#FFF9F0" color="transparent" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', marginBottom: '4px', fontWeight: '700' }}>Share Your Experience</div>
                    <div style={{ fontSize: '16px', color: '#FFF9F0', fontWeight: '700' }}>Leave a Google Review</div>
                  </div>
                </a>

              </div>
            </div>

            {/* Map Iframe */}
            <div style={{ 
              flex: 1, backgroundColor: '#FFF', borderRadius: '32px', overflow: 'hidden', 
              minHeight: '260px', position: 'relative', border: '1px solid #FFD6D6' 
            }}>
              <iframe 
                src="https://maps.google.com/maps?q=Mogappair+West,+Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '260px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              backgroundColor: '#DC2626', borderRadius: '40px', padding: '64px 56px', 
              color: '#FFF9F0', boxShadow: '0 30px 60px rgba(220, 38, 38, 0.2)' 
            }}
          >
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '36px', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
              SEND A MESSAGE
            </h3>
            <p style={{ fontSize: '15px', color: '#FFD6D6', marginBottom: '40px', maxWidth: '400px' }}>
              We'll review your assessment request and get back to you within 24 hours.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '12px', color: '#FFF9F0', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', opacity: 0.9 }}>Your Name</label>
                  <input type="text" placeholder="Sarah Smith" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '16px', padding: '18px 24px', color: '#FFF9F0', fontSize: '16px', outline: 'none', transition: 'all 0.3s'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#FFF9F0'; e.target.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.3)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '12px', color: '#FFF9F0', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', opacity: 0.9 }}>Email Address</label>
                  <input type="email" placeholder="sarah@example.com" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '16px', padding: '18px 24px', color: '#FFF9F0', fontSize: '16px', outline: 'none', transition: 'all 0.3s'
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#FFF9F0'; e.target.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.3)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '12px', color: '#FFF9F0', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', opacity: 0.9 }}>Message</label>
                <textarea rows="4" placeholder="Tell us more about your child's needs..." style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '16px', padding: '18px 24px', color: '#FFF9F0', fontSize: '16px', outline: 'none', resize: 'none', transition: 'all 0.3s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#FFF9F0'; e.target.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.3)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <button type="submit" style={{
                marginTop: '12px', backgroundColor: '#FFF9F0', color: '#DC2626',
                padding: '20px 40px', borderRadius: '100px', fontSize: '16px', fontWeight: '800',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s', textTransform: 'uppercase',
                letterSpacing: '0.1em', boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FFD6D6'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FFF9F0'; e.currentTarget.style.transform = 'translateY(0)' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
