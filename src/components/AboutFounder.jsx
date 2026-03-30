import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Heart, CheckCircle, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

const credentials = [
  { icon: <GraduationCap size={16} />, label: 'Master of Audiology & Speech Language Pathology (MASLP)' },
  { icon: <Award size={16} />, label: 'Registered with Rehabilitation Council of India' },
  { icon: <Heart size={16} />, label: '10+ years of dedicated clinical experience' },
  { icon: <CheckCircle size={16} />, label: 'Certified in Sensory Integration Therapy' },
]

export default function AboutFounder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" style={{ padding: '96px 24px', backgroundColor: '#F2EBE1' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: '#2D3728', marginBottom: '8px', lineHeight: 1.1
            }}>
              Meet the <span style={{ fontStyle: 'italic' }}>founder</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#5B6C54', maxWidth: '400px', margin: '0 auto' }}>
              Our expert therapist brings years of specialized training and clinical approach to your child's development.
            </p>
          </motion.div>

          {/* Provider Card Format */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', flexDirection: 'column',
            backgroundColor: '#4F634B', color: '#F2EBE1',
            borderRadius: '24px', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '40px 48px', gap: '48px' }} className="founder-flex">

              {/* Graphic/Avatar Column */}
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/vasanthi.jpg" 
                  alt="Vasanthi M" 
                  style={{
                    width: '140px', height: '140px', borderRadius: '50%',
                    objectFit: 'cover', border: '4px solid #D8E1D3'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  width: '140px', height: '140px', borderRadius: '50%',
                  backgroundColor: '#D8E1D3', color: '#3E4F39',
                  display: 'none', alignItems: 'center', justifyContent: 'center',
                  fontSize: '52px'
                }}>
                  V
                </div>
              </div>

              {/* Bio Column */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', color: '#F2EBE1', marginBottom: '4px' }}>
                      Vasanthi M
                    </h3>
                    <p style={{ fontSize: '13px', color: '#C5D0BC', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Lead Speech Therapist & Founder
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: '#3E4F39', color: '#D8E1D3',
                    padding: '8px 16px', borderRadius: '100px', fontSize: '12px'
                  }}>
                    10+ Yrs Experience
                  </div>
                </div>

                <p style={{ fontSize: '15px', color: '#EAEFE4', lineHeight: 1.6, marginBottom: '24px', maxWidth: '500px' }}>
                  A holistic approach combining evidence-based techniques with genuine warmth — ensuring that every child and family feels heard, supported, and empowered throughout their therapy journey.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {credentials.map(c => (
                    <div key={c.label} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                    }}>
                      <span style={{ color: '#A8B89F', marginTop: '2px' }}>{c.icon}</span>
                      <span style={{ fontSize: '14px', color: '#D8E1D3' }}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Banner base row */}
            <div style={{
              backgroundColor: '#3E4F39', padding: '24px 48px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span style={{ fontSize: '14px', color: '#C5D0BC', fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", fontSize: '20px' }}>
                "Every child has a voice waiting to be heard."
              </span>
              <a href="tel:+918110024552" style={{
                color: '#F2EBE1', display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '13px', fontWeight: '500', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                Consult Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-flex { flex-direction: column; text-align: center; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
