import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Heart, Users, Sparkles, Star, Zap, LayoutGrid, Clock } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const features = [
  {
    icon: <LayoutGrid size={24} />,
    title: "Comprehensive Care",
    desc: "All 3 therapies in one place,no need to run to different clinics for Speech, OT, or Special Education."
  },
  {
    icon: <Zap size={24} />,
    title: "Personalized Programs",
    desc: "Programs built specifically for your child’s unique needs, never a one-size fits all template."
  },
  {
    icon: <Users size={24} />,
    title: "Parent Partnership",
    desc: "We keep parents in the loop always with regular updates, guidance, and transparent communication."
  },
  {
    icon: <Heart size={24} />,
    title: "Child-Friendly space",
    desc: "A warm, playful environment where kids actually look forward to coming for their sessions."
  },
  {
    icon: <Clock size={24} />,
    title: "Early Intervention",
    desc: "Early help means better results. We catch developmental delays early to ensure the best outcomes."
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Tracked Progress",
    desc: "Real progress tracked and shared with you regularly, so you stay confident in your child's journey."
  }
]

function FeatureCard({ f, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: '40px',
        border: '1px solid #FFD6D6',
        boxShadow: '0 10px 30px rgba(220, 38, 38, 0.03)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: '12px',
        backgroundColor: '#DC2626', color: '#FFF9F0',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {f.icon}
      </div>
      <div>
        <h4 style={{
          fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: '800',
          color: '#111827', marginBottom: '8px', textTransform: 'uppercase'
        }}>
          {f.title}
        </h4>
        <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6 }}>
          {f.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="why" style={{ padding: '140px 24px', backgroundColor: '#FFF9F0', position: 'relative', overflow: 'hidden' }}>

      {/* Background Decor */}
      <AestheticSVG type="TEDDY" style={{ top: '10%', right: '-5%', width: '200px' }} opacity={0.06} color="#DC2626" />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '10%', left: '-5%', width: '200px' }} opacity={0.06} color="#DC2626" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          ref={containerRef}
          initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.span variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            color: '#111827', fontWeight: '800', textTransform: 'uppercase'
          }}>
            Why Parents <span style={{ color: '#DC2626' }}>Trust Us</span>
          </motion.h2>
        </motion.div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }} className="trust-grid">
          {features.map((f, i) => <FeatureCard key={f.title} f={f} index={i} />)}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          section#why { padding: 80px 20px !important; }
        }
        @media (max-width: 480px) {
          section#why { padding: 60px 16px !important; }
        }
      `}</style>
    </section>
  )
}
