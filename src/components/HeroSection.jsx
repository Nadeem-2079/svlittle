import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles, ArrowUpRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function GridLine({ vertical, style }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#EADDCF', // Subtle divider
      zIndex: 1,
      ...(vertical ? { width: '1px', height: '100%', top: 0 } : { height: '1px', width: '100%', left: 0 }),
      ...style
    }} />
  )
}

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh',
      backgroundColor: '#FFF9F0',
      position: 'relative', overflow: 'hidden',
      width: '100%',
      padding: '0'
    }}>

      {/* Background Decor */}
      <AestheticSVG type="TEDDY" style={{ top: '10%', right: '5%', width: '350px' }} opacity={0.06} color="#DC2626" />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '10%', left: '5%', width: '120px' }} opacity={0.06} color="#DC2626" />

      {/* Structured Minimalist Grid Line - ONLY SLEEPING LINE */}
      <GridLine style={{ top: '50%' }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        height: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 5
      }} className="hero-quad-grid">

        {/* 1. TOP LEFT: Structured Visual Hierarchy (Lowered to 170px) */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} style={{ padding: '0 80px', paddingTop: '170px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }} className="hero-content-quad">

          {/* Main Headline */}
          <motion.div variants={fadeUp} style={{ marginBottom: '16px', maxWidth: '420px' }}>
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              lineHeight: 1.1, color: '#111827', fontWeight: '800',
              letterSpacing: '-0.02em', textTransform: 'uppercase'
            }}>
              Every Child Has Potential
            </h1>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              lineHeight: 0.9, color: '#DC2626', fontWeight: '400', fontStyle: 'italic',
              letterSpacing: '-0.01em'
            }}>
              We Help Unlock It
            </h1>
          </motion.div>

          {/* High-Contrast Signature Line */}
          <motion.p variants={fadeUp} style={{
            fontSize: '22px', color: '#111827', fontWeight: '800',
            marginBottom: '24px', lineHeight: 1.2, maxWidth: '400px'
          }}>
            Helping Your Child Find Their Voice
          </motion.p>

          {/* Delicate Mission Tagline */}
          <motion.div variants={fadeUp} style={{ marginBottom: '44px', maxWidth: '380px' }}>
            <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6, fontWeight: '500', opacity: 0.9 }}>
              Small Steps Today, Big Confidence Tomorrow. Because Every Child Deserves to Shine.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link to="/#contact" style={{
              backgroundColor: '#DC2626', color: '#FFF9F0',
              padding: '16px 36px', borderRadius: '100px',
              fontSize: '14px', fontWeight: '800', textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 8px 16px rgba(220, 38, 38, 0.15)', transition: 'all 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Book a Appointment <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* 2. TOP RIGHT */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} style={{ padding: '0 80px', paddingTop: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right' }} className="hero-stat-quad">
          {/* Content Removed as per Prior Request */}
        </motion.div>

        {/* 3. BOTTOM LEFT */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} style={{ padding: '0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left' }} className="hero-social-quad">
          {/* Space intentionally left blank for a more minimalist feel */}
        </motion.div>

        {/* 4. BOTTOM RIGHT: Streamlined Stats */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} style={{ padding: '0 80px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right' }} className="hero-experience-quad">
          <motion.div variants={fadeUp} style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '56px', fontWeight: '800', color: '#111827', lineHeight: 1 }}>6+ Years</div>
            <div style={{ fontSize: '13px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '8px', fontWeight: '800' }}>Of Experience</div>
          </motion.div>
        </motion.div>

        {/* CENTRAL CIRCLE Focal Point */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '480px',
          height: '480px',
          zIndex: 20,
          pointerEvents: 'none'
        }} className="central-focal">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%', // PERFECT CIRCLE
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(220, 38, 38, 0.12)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
              overflow: 'hidden',
              position: 'relative',
              pointerEvents: 'auto'
            }}
          >
            <img
              src="/homesv.png"
              alt="Therapy Clinic"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Contrast Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(220, 38, 38, 0.05), transparent)' }} />
          </motion.div>

          {/* Overlapping Circle Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '25px',
              zIndex: 30,
              pointerEvents: 'auto'
            }}
          >
            <a href="#gallery" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#DC2626', boxShadow: '0 15px 40px rgba(220, 38, 38, 0.4)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#991B1B'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#DC2626'}>
              <ArrowUpRight size={56} strokeWidth={2.5} color="#FFF9F0" />
            </a>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1280px) {
           .central-focal { width: 420px !important; height: 420px !important; }
        }
        @media (max-width: 1200px) {
          .hero-quad-grid { padding: 0 !important; }
          div[style*="padding: '0 80px'"] { padding: 40px !important; }
        }
        @media (max-width: 900px) {
          .hero-quad-grid { 
            display: flex !important; 
            flex-direction: column !important; 
            height: auto !important; 
            padding-top: 100px !important;
          }
          .hero-content-quad { 
            padding: 40px 24px !important; 
            text-align: center !important; 
            align-items: center !important; 
            order: 1 !important; 
            border: none !important;
          }
          .central-focal { 
            position: relative !important; 
            transform: none !important; 
            margin: 40px auto !important; 
            top: auto !important;
            left: auto !important;
            width: 320px !important; 
            height: 320px !important; 
            order: 2 !important; 
          }
          .hero-experience-quad {
            order: 3 !important;
            padding: 40px 24px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-stat-quad, .hero-social-quad { display: none !important; }
        }
      `}</style>
    </section>
  )
}
