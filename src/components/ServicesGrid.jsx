import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Ear, Smile, Coffee, Hand, Brain, Zap, Eye, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function AnimatedSection({ children, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={style}>
      {children}
    </motion.div>
  )
}

const speechServices = [
  { icon: <MessageSquare size={20} />, title: 'Communication Disorders', desc: 'Expressive and receptive language delays, vocabulary building, and social communication skills.' },
  { icon: <Ear size={20} />, title: 'Speech Sounds', desc: 'Articulation, phonological awareness, and clear speech production for confident communication.' },
  { icon: <Smile size={20} />, title: 'Stuttering & Fluency', desc: 'Evidence-based fluency therapy for children and adults to speak with confidence and ease.' },
  { icon: <Coffee size={20} />, title: 'Feeding & Swallowing', desc: 'Oral motor therapy and feeding interventions for picky eaters and swallowing difficulties.' },
]

const otServices = [
  { icon: <Hand size={20} />, title: 'Fine & Gross Motor', desc: 'Developing coordination, handwriting, balance, and physical strength for daily activities.' },
  { icon: <Brain size={20} />, title: 'Sensory Processing', desc: 'Helping children understand and respond appropriately to sensory information optimally.' },
  { icon: <Zap size={20} />, title: 'Executive Functioning', desc: 'Building attention, planning, task initiation, and organizational skills for academic success.' },
  { icon: <Eye size={20} />, title: 'Visual Motor Integration', desc: 'Improving eye-hand coordination essential for reading, writing, and sports performance.' },
]

function ServiceCard({ service, index, bgColor }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.06)' }}
      style={{
        backgroundColor: bgColor, borderRadius: '24px', padding: '36px',
        display: 'flex', flexDirection: 'column', height: '100%',
        position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '100px',
        backgroundColor: '#F2EBE1', color: '#3E4F39',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '40px', opacity: 0.9
      }}>
        {service.icon}
      </div>

      <div style={{ marginTop: 'auto' }}>
        <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '600', color: '#2D3728', marginBottom: '8px' }}>
          {service.title}
        </h4>
        <p style={{ fontSize: '13px', color: '#4F634B', lineHeight: 1.5 }}>
          {service.desc}
        </p>
      </div>

      <div style={{
        position: 'absolute', bottom: '24px', right: '24px',
        width: '28px', height: '28px', borderRadius: '50%',
        backgroundColor: '#4F634B', color: '#F2EBE1',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <ArrowUpRight size={14} />
      </div>
    </motion.div>
  )
}

export default function ServicesGrid() {
  return (
    <section id="services" style={{ padding: '96px 24px', backgroundColor: '#F2EBE1' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <AnimatedSection style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: '#2D3728', marginBottom: '8px', lineHeight: 1.1
          }}>
            Therapy <span style={{ fontStyle: 'italic' }}>formats</span>
          </motion.h2>
        </AnimatedSection>

        {/* Speech Therapy Section */}
        <AnimatedSection style={{ marginBottom: '32px' }}>
          <motion.div variants={fadeUp} style={{ borderBottom: '1px solid #C5D0BC', paddingBottom: '16px', marginBottom: '24px' }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: '#3E4F39' }}>Speech Therapy</h3>
          </motion.div>
        </AnimatedSection>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px', marginBottom: '80px',
        }}>
          {speechServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} bgColor="#E8EFE5" />)}
        </div>

        {/* Occupational Therapy Section */}
        <AnimatedSection style={{ marginBottom: '32px' }}>
          <motion.div variants={fadeUp} style={{ borderBottom: '1px solid #C5D0BC', paddingBottom: '16px', marginBottom: '24px' }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: '#3E4F39' }}>Occupational Therapy</h3>
          </motion.div>
        </AnimatedSection>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {otServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} bgColor="#D8E1D3" />)}
        </div>

      </div>
    </section>
  )
}
