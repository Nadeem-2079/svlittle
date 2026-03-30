import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, BookOpen, Users, ClipboardCheck, Lightbulb, Heart, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const supports = [
  { icon: <Home size={18} />, title: 'Home-based Programs', color: '#3E4F39', bg: '#D8E1D3' },
  { icon: <BookOpen size={18} />, title: 'School Collaboration', color: '#2D3728', bg: '#EAEFE4' },
  { icon: <Users size={18} />, title: 'Parent Coaching', color: '#F2EBE1', bg: '#4F634B' },
  { icon: <ClipboardCheck size={18} />, title: 'Regular Progress Monitoring', color: '#3E4F39', bg: '#C5D0BC' },
  { icon: <Lightbulb size={18} />, title: 'Sensory-Friendly Spaces', color: '#2D3728', bg: '#EAEFE4' },
  { icon: <Heart size={18} />, title: 'Emotional Wellbeing', color: '#F2EBE1', bg: '#768A6A' },
]

function SupportCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div
      style={{
        backgroundColor: item.bg, color: item.color, borderRadius: '24px', padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0,
        position: 'relative', overflow: 'hidden', width: '240px', height: '180px'
      }}
    >
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%',
        backgroundColor: item.color, color: item.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: 0.9
      }}>
        {item.icon}
      </div>
      <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '500', lineHeight: 1.4, marginTop: 'auto', whiteSpace: 'normal' }}>
        {item.title}
      </h4>
    </div>
  )
}

function AnimatedSection({ children, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={style}>
      {children}
    </motion.div>
  )
}

export default function SupportSection() {
  return (
    <section id="support" style={{
      padding: '80px 0',
      backgroundColor: '#E5ECE0',
      borderRadius: '40px 40px 0 0', marginTop: '-40px', position: 'relative', zIndex: 10,
      overflow: 'hidden', width: '100%'
    }}>
      <div style={{ margin: '0 auto' }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: '#2D3728', marginBottom: '16px', lineHeight: 1.1
          }}>
            Family-Centred <span style={{ fontStyle: 'italic' }}>Care</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '15px', color: '#5B6C54', maxWidth: '440px', margin: '0 auto', lineHeight: 1.6 }}>
            Empowering parents to become the best advocates for their child's unique journey.
          </motion.p>
        </AnimatedSection>

        <div style={{ overflow: 'hidden', width: '100%', display: 'flex', marginTop: '40px' }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            style={{ display: 'flex', gap: '20px', minWidth: 'min-content', padding: '0 20px' }}
          >
            {[...supports, ...supports].map((item, i) => (
              <SupportCard key={i} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Action Banner */}
        <AnimatedSection style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          <motion.a variants={fadeUp} href="tel:+918110024552" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#3E4F39', color: '#F2EBE1',
            padding: '16px 32px', borderRadius: '100px',
            fontSize: '13px', fontWeight: '500', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            Contact Us Today <ArrowRight size={16} />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}
