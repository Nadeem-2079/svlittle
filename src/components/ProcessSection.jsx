import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const steps = [
  {
    num: 1,
    title: 'Book a Consultation',
    desc: 'Call us at 81100 24552 or fill out our contact form. We will schedule a time that works for you.'
  },
  {
    num: 2,
    title: 'Clinical Consultation',
    desc: 'We listen closely to your concerns and uncover the root cause behind the challenges your child is facing.'
  },
  {
    num: 3,
    title: 'Developmental Plan',
    desc: 'Consult with our experts and explore a therapy plan tailored to your child\'s unique developmental needs.'
  },
  {
    num: 4,
    title: 'Monthly Progress Review',
    desc: 'Regular check-ins to ensure your child is making measurable improvements toward their goals.'
  },
  {
    num: 5,
    title: 'Track Growth & Results',
    desc: 'We don\'t just treat symptoms—we transform lives by actively monitoring and measuring breakthroughs.'
  },
  {
    num: 6,
    title: 'Successful Graduation',
    desc: 'Celebrate your child’s successful journey and graduation with confidence and newfound skills.'
  }
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="process" style={{ padding: '140px 24px', backgroundColor: '#FFF9F0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', left: '2%', width: '150px' }} opacity={0.10} color="#FFD6D6" />
      <AestheticSVG type="TOY_BLOCKS" style={{ top: '15%', right: '2%', width: '120px' }} opacity={0.06} color="#DC2626" rotate={15} />
      <AestheticSVG type="ROCKET" style={{ bottom: '15%', left: '5%', width: '180px' }} opacity={0.08} color="#DC2626" rotate={-10} />
      <AestheticSVG type="KIDS_HEART" style={{ bottom: '10%', right: '5%', width: '150px' }} opacity={0.1} color="#DC2626" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}>
            <Sparkles size={14} fill="#991B1B" color="transparent" /> OUR CARE PROCESS
          </span>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#111827',
            lineHeight: 1.1,
            textTransform: 'uppercase',
            margin: '0 auto',
            maxWidth: '800px'
          }}>
            HOW WE WORK <span style={{ color: '#DC2626' }}>WITH YOUR CHILD</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', width: '100%', padding: '40px 0' }}>
          
          {/* Horizontal Desktop Line */}
          <div className="hidden md:block" style={{
            position: 'absolute',
            top: '28px', 
            left: '0',
            width: '100%',
            height: '100px',
            zIndex: 0,
            opacity: 0.3
          }}>
             <svg viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path 
                d="M 100,68 Q 150,20 300,68 T 500,68 T 700,68 T 900,68 T 1100,68" 
                fill="none" 
                stroke="#DC2626" 
                strokeWidth="3" 
                strokeDasharray="12 12"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Vertical Mobile Line (Added for better mobile UX) */}
          <div className="mobile-only-line" style={{
            display: 'none',
            position: 'absolute',
            top: '68px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(100% - 130px)',
            borderLeft: '2px dashed rgba(220, 38, 38, 0.3)',
            zIndex: 0
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '48px 24px',
            position: 'relative',
            zIndex: 1
          }} className="process-grid">
            {steps.map((step, index) => {
              const isActiveStep = index === 2 || index === 3; 
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: isActiveStep ? '#DC2626' : '#FFFFFF',
                    color: isActiveStep ? '#FFF9F0' : '#DC2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '20px',
                    marginBottom: '28px',
                    border: '2px solid #DC2626',
                    boxShadow: isActiveStep ? '0 10px 20px rgba(220, 38, 38, 0.2)' : 'none',
                    transform: isActiveStep ? 'scale(1.1)' : 'none',
                    transition: 'all 0.3s',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {step.num}
                  </div>

                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '800',
                    color: '#111827',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '16px',
                    lineHeight: 1.3,
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {step.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: 1.6,
                    maxWidth: '240px',
                    opacity: 0.95
                  }}>
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
          <a href="#contact" style={{ 
            backgroundColor: '#DC2626', color: '#FFF9F0',
            padding: '18px 48px', borderRadius: '100px',
            fontSize: '14px', fontWeight: '800', textDecoration: 'none',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid #DC2626',
            boxShadow: '0 12px 24px rgba(220, 38, 38, 0.3)', transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#991B1B'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DC2626'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Book a Consultation
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { 
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .mobile-only-line { 
            display: block !important; 
          }
        }
      `}</style>
    </section>
  )
}
