import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

const testimonials = [
  { name: 'Priya R.', relation: 'Mother of 4-year-old', rating: 5, text: "My son had almost no words at 3 years old. After 6 months with Vasanthi ma'am, he's speaking full sentences and thriving. We are so grateful!" },
  { name: 'Karthik S.', relation: 'Father of 6-year-old', rating: 5, text: "The occupational therapy completely changed our daughter's ability to handle her sensory sensitivities. She now loves school and has made many friends." },
  { name: 'Anitha M.', relation: 'Mother of 7-year-old', rating: 5, text: "Vasanthi ma'am treats every child as her own. The progress reports are detailed and the home activities really helped us support our son between sessions." },
  { name: 'Suresh K.', relation: 'Father of 5-year-old', rating: 5, text: "The environment is so calming and child-friendly. Our daughter, who was anxious about therapy, now looks forward to her sessions every week!" },
  { name: 'Meera T.', relation: 'Mother of 8-year-old', rating: 5, text: "We tried multiple therapists before SV Little Leapsters. The genuine care and scientific approach here is unmatched. Our son's handwriting improved dramatically." },
  { name: 'Rajesh P.', relation: 'Father of twins, age 5', rating: 5, text: "Managing therapy for two children simultaneously seemed impossible. The team made it seamless, and both our boys have made incredible progress!" },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#4F634B" color="#4F634B" />
      ))}
    </div>
  )
}

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      style={{
        backgroundColor: '#E8EFE5', borderRadius: '24px', padding: '32px',
        color: '#2D3728', border: 'none', boxShadow: 'none'
      }}
    >
      <Stars count={t.rating} />
      <p style={{
        fontSize: '15px', color: '#3E4F39', lineHeight: 1.7,
        marginBottom: '24px', fontStyle: 'italic', fontFamily: "'Instrument Serif', serif",
        fontSize: '20px'
      }}>
        "{t.text}"
      </p>
      <div>
        <div style={{ fontWeight: '500', fontSize: '13px', color: '#2D3728', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t.name}
        </div>
        <div style={{ fontSize: '12px', color: '#768A6A' }}>
          {t.relation}
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" style={{
      padding: '120px 24px',
      backgroundColor: '#2D3728', /* Dark forest base */
      color: '#F2EBE1',
      borderRadius: '40px',
      margin: '0 16px 40px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Central Circular Element / Headline inspired by the "Healing isn't a straight line" circle */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={fadeUp} style={{
            width: '320px', height: '320px', borderRadius: '50%',
            backgroundColor: '#F2EBE1', color: '#3E4F39',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '32px', boxShadow: '0 20px 80px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif", fontSize: '32px',
              color: '#2D3728', marginBottom: '16px', lineHeight: 1.1
            }}>
              Progress isn't always a straight line.<br />
              <span style={{ fontStyle: 'italic', color: '#4F634B' }}>But it doesn't have to be a circle.</span>
            </h2>
            <div style={{
              backgroundColor: '#4F634B', color: '#F2EBE1',
              padding: '6px 16px', borderRadius: '100px', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.05em'
            }}>
              Parent Stories
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>

      {/* Background Decorative Circles & SVGs */}
      <AestheticSVG type="BLOB" style={{ bottom: '-20%', left: '-10%', width: '600px' }} opacity={0.4} color="#1A2216" rotate={45} />
      <AestheticSVG type="ARCH" style={{ top: '-10%', right: '-5%', width: '400px' }} opacity={0.3} color="#1A2216" rotate={-15} />
      <AestheticSVG type="STAR" style={{ bottom: '20%', right: '15%', width: '80px' }} opacity={0.6} color="#1A2216" rotate={10} />
      
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', border: '1px solid rgba(242,235,225,0.05)', zIndex: 1
      }} />
    </section>
  )
}
