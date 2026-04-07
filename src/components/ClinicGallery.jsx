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

// Aesthetic Placeholder Block / Image Container
function GalleryPlaceholder({ height, color, index, src }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        height: height,
        backgroundColor: color,
        borderRadius: '24px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px', textAlign: 'center', color: '#3E4F39',
        border: '1px solid #C5D0BC',
        position: 'relative', overflow: 'hidden'
      }}
    >
      <img 
        src={src} 
        alt={`Clinic Space ${index}`} 
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div style={{
        display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Soft icon in the absolute center */}
        <ImageIcon size={32} opacity={0.3} style={{ marginBottom: '12px' }} />
        <span style={{ fontSize: '13px', fontWeight: '500', opacity: 0.6 }}>
          Add {src}
        </span>
      </div>
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
          
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ 
                display: 'inline-block', backgroundColor: '#FFD6D6', color: '#991B1B', 
                fontSize: '12px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px',
                marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase'
              }}>Our Space</span>
              <h2 style={{
                fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: '#111827', lineHeight: 1.1, fontWeight: '800', textTransform: 'uppercase'
              }}>
                A soothing environment <span style={{ color: '#FF4D4D' }}>for growth.</span>
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: '#4B5563', maxWidth: '320px', lineHeight: 1.5 }}>
              Our clinic is designed to be a safe, engaging, and sensory-friendly space where your child feels completely at home.
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
