import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function GalleryPlaceholder({ height, color, index, src, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        height: height,
        backgroundColor: color,
        borderRadius: '24px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px', textAlign: 'center', color: '#3E4F39',
        border: '1px solid #EADDCF',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
      }}
    >
      <img 
        src={src} 
        alt={label || `Clinic Space ${index}`} 
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
          e.target.nextSibling.nextSibling.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }}
      />
      <div style={{
        display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2
      }}>
        <ImageIcon size={32} opacity={0.3} style={{ marginBottom: '12px' }} />
        <span style={{ fontSize: '12px', fontWeight: '500', opacity: 0.6 }}>
          {label}
        </span>
      </div>
      
      {/* Label Overlay removed as per request */}
    </motion.div>
  )
}

export default function ClinicGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" style={{ padding: '80px 24px', backgroundColor: '#FFF9F0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          
          <motion.div variants={fadeUp} style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            textAlign: 'center',
            marginBottom: '64px', 
            gap: '16px' 
          }}>
            <span style={{ 
              display: 'inline-block', backgroundColor: '#FFD6D6', color: '#991B1B', 
              fontSize: '12px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>The Clinic</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: '#111827', lineHeight: 1.1, fontWeight: '800', textTransform: 'uppercase'
            }}>
              Where comfort meets <span style={{ color: '#DC2626' }}>clinical excellence.</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#4B5563', maxWidth: '600px', lineHeight: 1.6 }}>
              Step inside our purpose-built facility in Mogappair West—a sensory-friendly, secure, and vibrant haven designed to maximize every therapeutic milestone.
            </p>
          </motion.div>

          {/* Mosaic Gallery Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="gallery-grid">
            
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <GalleryPlaceholder height="380px" color="#FFFFFF" index={1} src="/clinic1.jpg" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <GalleryPlaceholder height="240px" color="#FFF5F5" index={2} src="/clinic2.jpg" />
                <GalleryPlaceholder height="240px" color="#FFFFFF" index={3} src="/clinic3.jpg" />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <GalleryPlaceholder height="240px" color="#FFFFFF" index={4} src="/clinic4.jpg" />
                <GalleryPlaceholder height="240px" color="#FFF5F5" index={5} src="/clinic5.jpg" />
              </div>
              <GalleryPlaceholder height="380px" color="#FFFFFF" index={6} src="/clinic6.jpg" />
            </div>

          </div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
