import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Hand, BookOpen, ArrowUpRight, Sparkles, Clock, Users } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }

const services = [
  {
    icon: <MessageSquare size={24} />,
    title: 'Speech Therapy',
    hook: "When words don't come easy, we help find them.",
    desc: "We help children and adults speak clearly, express themselves, and communicate with confidence. Whether your child is late to talk, hard to understand, or struggles with stuttering we have a plan for them.",
    meta: ["Speech & Language", "Articulation", "Stuttering / Fluency", "40 min sessions"],
    color: '#DC2626'
  },
  {
    icon: <Hand size={24} />,
    title: 'Occupational Therapy',
    hook: "Small hands. Big milestones. We help get there.",
    desc: "We help children build the everyday skills that school and life demand — writing, focusing, getting dressed, handling emotions, and more. If your child struggles with coordination or daily tasks, Occupational Therapy can help.",
    meta: ["Children (Pediatric)", "40 min sessions"],
    color: '#DC2626'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Special Education',
    hook: "Every child learns differently. We teach their way.",
    desc: "We work one-on-one with children who need a different kind of learning — customized lessons, patience, and a plan built just for them.",
    meta: ["Children and teenagers", "40 min sessions"],
    color: '#DC2626'
  }
]

function ServiceCard({ s, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        padding: '48px 40px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #FFD6D6',
        boxShadow: '0 20px 50px rgba(220, 38, 38, 0.05)',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div style={{
        width: '60px', height: '60px', borderRadius: '16px',
        backgroundColor: '#DC2626', color: '#FFF9F0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '40px', boxShadow: '0 8px 24px rgba(220, 38, 38, 0.2)'
      }}>
        {s.icon}
      </div>

      <h3 style={{ 
        fontFamily: "'Inter', sans-serif", fontSize: '26px', fontWeight: '800', 
        color: '#111827', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '-0.01em' 
      }}>
        {s.title}
      </h3>

      <div style={{ 
        fontFamily: "'Instrument Serif', serif", fontSize: '20px', 
        color: '#DC2626', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.2 
      }}>
        {s.hook}
      </div>

      <p style={{ 
        fontSize: '16px', color: '#4B5563', lineHeight: 1.7, 
        marginBottom: '40px', flex: 1 
      }}>
        {s.desc}
      </p>

      {/* Meta Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
        {s.meta.map((m, i) => (
          <span key={i} style={{
            fontSize: '11px', fontWeight: '800', textTransform: 'uppercase',
            letterSpacing: '0.05em', color: '#991B1B',
            backgroundColor: '#FFD6D6', padding: '6px 14px', borderRadius: '100px',
            display: 'inline-flex', alignItems: 'center', gap: '4px'
          }}>
            {i === 0 ? <Users size={12} /> : <Clock size={12} />} {m}
          </span>
        ))}
      </div>

      <div style={{
        position: 'absolute', top: '40px', right: '40px',
        width: '40px', height: '40px', borderRadius: '50%',
        backgroundColor: '#FFF9F0', color: '#DC2626',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid #FFD6D6', transition: 'all 0.3s'
      }} className="card-arrow">
        <ArrowUpRight size={20} />
      </div>
    </motion.div>
  )
}

export default function ServicesGrid() {
  return (
    <section id="services" style={{ 
      padding: '160px 24px', 
      backgroundColor: '#FFF9F0', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      
      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', left: '-2%', width: '180px' }} opacity={0.06} color="#DC2626" />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '15%', right: '2%', width: '220px' }} opacity={0.08} color="#DC2626" rotate={10} />
      <AestheticSVG type="ROCKET" style={{ top: '40%', right: '-5%', width: '280px' }} opacity={0.04} color="#FFD6D6" rotate={90} />
      <AestheticSVG type="KIDS_HEART" style={{ top: '15%', right: '10%', width: '80px' }} opacity={0.15} color="#FFD6D6" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> Specialized Intervention
          </motion.span>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            color: '#111827', marginBottom: '16px', lineHeight: 1.1, fontWeight: '800', textTransform: 'uppercase'
          }}>
            What <span style={{ color: '#DC2626' }}>We Do</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#4B5563', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Three specialist services. One caring team. One convenient location.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }} className="services-main-grid">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} index={i} />)}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-main-grid { grid-template-columns: 1fr !important; }
          div[style*="padding: '48px 40px'"] { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  )
}
