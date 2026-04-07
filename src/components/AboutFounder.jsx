import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

const credentials = [
  { icon: <GraduationCap size={16} />, label: 'Master of Audiology & Speech Language Pathology (MASLP)' },
  { icon: <Award size={16} />, label: 'Registered with Rehabilitation Council of India (RCI)' },
  { icon: <Heart size={16} />, label: '10+ years of dedicated clinical experience' },
  { icon: <CheckCircle size={16} />, label: 'Certified in Sensory Integration Therapy' },
]

export default function AboutFounder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" style={{ padding: '140px 24px', backgroundColor: '#FFF9F0', position: 'relative', overflow: 'hidden' }}>

      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', left: '5%', width: '120px' }} opacity={0.12} color="#DC2626" />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '15%', left: '10%', width: '150px' }} opacity={0.08} color="#FFD6D6" rotate={-10} />
      <AestheticSVG type="ROCKET" style={{ top: '25%', right: '5%', width: '100px' }} opacity={0.08} color="#DC2626" rotate={20} />
      <AestheticSVG type="KIDS_HEART" style={{ bottom: '5%', right: '15%', width: '80px' }} opacity={0.15} color="#FFD6D6" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> Professional Background
          </span>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: '#111827', marginBottom: '16px', lineHeight: 1.1, fontWeight: '800', textTransform: 'uppercase'
          }}>
            ABOUT OUR <span style={{ color: '#DC2626' }}>FOUNDER</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#4B5563', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            We believe every child has potential. Our job is to help them reach it.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* Main Card Decoration */}
          <AestheticSVG type="STAR" style={{ top: '-40px', left: '-40px', width: '120px' }} opacity={0.3} color="#FFD6D6" />

          {/* Main Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.3fr)',
            backgroundColor: '#DC2626', color: '#FFF9F0',
            borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(220, 38, 38, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="founder-grid">

            {/* Left: Illustration Area */}
            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} style={{ position: 'relative', minHeight: '500px', backgroundColor: '#FFF9F0' }}>
              <img
                src="/vasanthi.jpg"
                alt="Vasanthi M - Founder"
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  objectFit: 'cover', opacity: 1, display: 'block'
                }}
              />
            </motion.div>

            {/* Right: Bio Column */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }} style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#991B1B' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '13px', color: '#FFD6D6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', display: 'block', marginBottom: '8px' }}>
                    Founder & Lead SLP
                  </span>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px', fontWeight: '800', color: '#FFF9F0', lineHeight: 1.1 }}>
                    Vasanthi M
                  </h3>
                </div>
                <div style={{
                  backgroundColor: '#FFF9F0', color: '#991B1B',
                  padding: '12px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: '800',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)', textTransform: 'uppercase'
                }}>
                  Clinical Excellence
                </div>
              </div>

              <p style={{ fontSize: '17px', color: '#FFD6D6', lineHeight: 1.8, marginBottom: '48px', opacity: 0.95 }}>
                Our vision is to provide every child with a voice. By combining 10+ years of clinical insight with family-centered care, we create an environment where communication breakthroughs happen every single day.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '56px' }}>
                {credentials.map(c => (
                  <div key={c.label} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '16px',
                  }}>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '8px', borderRadius: '50%', color: '#FFFFFF' }}>{c.icon}</div>
                    <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '600', marginTop: '6px', lineHeight: 1.4 }}>{c.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quote & Action */}
              <div style={{
                paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: '32px'
              }}>
                <span style={{ fontSize: '22px', color: '#FFD6D6', fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", maxWidth: '300px', lineHeight: 1.25 }}>
                  "Helping every voice reach its potential."
                </span>
                <a href="#contact" style={{
                  backgroundColor: '#FFFFFF', padding: '18px 40px', borderRadius: '100px',
                  color: '#991B1B', display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '15px', fontWeight: '800', textDecoration: 'none',
                  textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  Consult Now <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
