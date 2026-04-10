import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, BookOpen, Users, ClipboardCheck, Lightbulb, Heart, ArrowRight, Sparkles } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const supports = [
  { icon: <Home size={18} />, title: 'Home Based Support', color: '#DC2626', bg: '#FFFFFF' },
  { icon: <BookOpen size={18} />, title: 'School Integration', color: '#111827', bg: '#FFD6D6' },
  { icon: <Users size={18} />, title: 'Parent Training', color: '#FFF9F0', bg: '#DC2626' },
  { icon: <ClipboardCheck size={18} />, title: 'Regular Progress', color: '#DC2626', bg: '#FFFFFF' },
  { icon: <Lightbulb size={18} />, title: 'Sensory Guidance', color: '#111827', bg: '#FFD6D6' },
  { icon: <Heart size={18} />, title: 'Emotional Health', color: '#FFF9F0', bg: '#991B1B' },
]

function SupportCard({ item }) {
  return (
    <div
      style={{
        backgroundColor: item.bg, color: item.color, borderRadius: '24px', padding: '32px 24px',
        display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0,
        position: 'relative', overflow: 'hidden', width: '220px', height: '180px',
        boxShadow: item.bg === '#FFFFFF' ? '0 10px 30px rgba(0,0,0,0.03)' : 'none',
        border: item.bg === '#FFFFFF' ? '1px solid #EADDCF' : 'none'
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '12px',
        backgroundColor: item.color, color: item.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: 0.95
      }}>
        {item.icon}
      </div>
      <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '800', lineHeight: 1.4, marginTop: 'auto', letterSpacing: '0.01em' }}>
        {item.title}
      </h4>
    </div>
  )
}

function AnimatedSection({ children, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={style}>
      {children}
    </motion.div>
  )
}

export default function SupportSection() {
  return (
    <section id="support" style={{
      padding: '120px 0 100px',
      backgroundColor: '#FFF9F0',
      position: 'relative', zIndex: 10,
      overflow: 'hidden', width: '100%',
      borderTop: '1px solid #FFD6D6'
    }}>
      
      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', left: '2%', width: '150px' }} opacity={0.12} color="#DC2626" rotate={10} />
      <AestheticSVG type="TOY_BLOCKS" style={{ top: '15%', right: '0%', width: '250px' }} opacity={0.08} color="#FFD6D6" />
      <AestheticSVG type="ROCKET" style={{ bottom: '10%', right: '5%', width: '120px' }} opacity={0.15} color="#DC2626" rotate={-10} />
      <AestheticSVG type="KIDS_HEART" style={{ bottom: '5%', left: '3%', width: '60px' }} opacity={0.2} color="#DC2626" />

      <div style={{ margin: '0 auto' }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px', padding: '0 24px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> Holistic CARE
          </span>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#111827', marginBottom: '16px', lineHeight: 1.1, fontWeight: '800', textTransform: 'uppercase'
          }}>
            SUPPORTING THE <span style={{ color: '#DC2626' }}>WHOLE FAMILY</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#4B5563', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            We provide the tools and training families need to support their child's progress outside the clinic environment.
          </motion.p>
        </AnimatedSection>

        <div style={{ overflow: 'hidden', width: '100%', display: 'flex', marginTop: '40px' }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            style={{ display: 'flex', gap: '20px', minWidth: 'min-content', padding: '0 10px' }}
          >
            {[...supports, ...supports].map((item, i) => (
              <SupportCard key={i} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
