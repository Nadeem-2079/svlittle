import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Globe, MapPin, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

function AnimatedSection({ children, style, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const pills = [
  { icon: <CheckCircle size={14} />, text: 'Evidence-based', color: '#4F634B', textColor: '#F2EBE1' },
  { icon: <Globe size={14} />, text: 'Virtual & In-person', color: '#D8E1D3', textColor: '#2D3728' },
  { icon: <MapPin size={14} />, text: 'Chennai, TN', color: '#A8B89F', textColor: '#2D3728' },
  { icon: <Heart size={14} />, text: 'Family-centered', color: '#C5D0BC', textColor: '#2D3728' },
]

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#F2EBE1',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '140px 24px 80px',
      position: 'relative', overflow: 'hidden',
      width: '100%',
    }}>
      
      {/* Background SVGs */}
      <AestheticSVG type="ARCH" style={{ top: '10%', right: '-5%', width: '450px' }} opacity={0.6} rotate={5} />
      <AestheticSVG type="BLOB" style={{ bottom: '5%', left: '-10%', width: '550px' }} opacity={0.4} rotate={-10} />
      <AestheticSVG type="STAR" style={{ top: '25%', left: '12%', width: '60px' }} opacity={0.5} rotate={30} scale={1.2} />

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', textAlign: 'center', zIndex: 10, position: 'relative' }}>
        <AnimatedSection>
          
          <motion.div variants={fadeUp} style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              backgroundColor: '#4F634B', color: '#F2EBE1',
              padding: '8px 20px', borderRadius: '100px',
              fontSize: '12px', fontWeight: '500', letterSpacing: '0.1em',
              textTransform: 'uppercase', fontFamily: "'Inter', sans-serif"
            }}>
              Online & Offline Therapy
            </span>
          </motion.div>

          {/* Corrected Headline */}
          <div style={{ marginBottom: '40px' }}>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(4rem, 9vw, 7.5rem)',
              lineHeight: 0.95, color: '#2D3728',
              marginBottom: '10px', fontWeight: '400',
              letterSpacing: '-0.03em',
            }}>
              Help your child
            </motion.h1>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(4rem, 9vw, 7.5rem)',
              lineHeight: 0.95, color: '#4F634B',
              marginBottom: '0', fontWeight: '400', fontStyle: 'italic',
              letterSpacing: '-0.03em',
            }}>
              reach their potential.
            </motion.h1>
          </div>

          {/* RESTORED Turn 11 Content */}
          <motion.p variants={fadeUp} style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px', color: '#5B6C54',
            maxWidth: '650px', margin: '0 auto 40px',
            lineHeight: 1.6, fontWeight: '400',
          }}>
            Welcome to SV Little Leapsters Therapy Centre, where we provide comprehensive speech and occupational therapy services for individuals of all ages. Our compassionate team takes a holistic approach, blending evidence-based techniques, emotional support, and lifestyle education.
          </motion.p>

          {/* RESTORED Turn 11 Content - Holistic Boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {['Evidence-based techniques', 'Emotional support', 'Lifestyle education'].map((item, idx) => (
              <motion.div key={item} variants={fadeUp} style={{
                backgroundColor: 'rgba(79, 99, 75, 0.05)', padding: '16px', borderRadius: '16px',
                border: '1px solid rgba(79, 99, 75, 0.1)', fontSize: '14px', color: '#3E4F39', fontWeight: '500'
              }}>
                {item}
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} style={{ fontSize: '15px', color: '#768A6A', marginBottom: '40px' }}>
            We create personalized treatment plans tailored to each individual.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" style={{
              backgroundColor: '#4F634B', color: '#F2EBE1',
              padding: '16px 40px', borderRadius: '100px',
              fontSize: '14px', fontWeight: '600', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              border: '1px solid #4F634B', display: 'flex', alignItems: 'center', gap: '10px'
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3E4F39' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#4F634B' }}
            >
              Book Consultation <ArrowRight size={18} />
            </Link>
            <a href="#services" style={{
              backgroundColor: '#F2EBE1', color: '#3E4F39',
              padding: '16px 40px', borderRadius: '100px',
              fontSize: '14px', fontWeight: '600', textDecoration: 'none',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              border: '1px solid #C5D0BC'
            }}>
              Our Services
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
