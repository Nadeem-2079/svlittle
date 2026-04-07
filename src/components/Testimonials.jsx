import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Sparkles } from 'lucide-react'
import AestheticSVG from './AestheticSVG.jsx'

const personalFav = {
  name: 'A Grateful Parent',
  date: '2 months ago',
  text: "Earlier, my daughter attended another speech therapy center, but unfortunately, we didn’t see much improvement in her speech. Later, a friend recommended SV Speech Therapy, and since then, we’ve noticed a significant positive change—my daughter has started speaking words.\n\nVasanthi ma’am and Suriya ma’am handle the children with great care and kindness, which makes a big difference. I would also like to mention the Occupational Therapy team—Shruti ma’am and sir are doing an excellent job. Their approach towards the kids, along with the way they communicate and guide parents, is truly commendable. They understand the issues well and provide effective solutions.\n\nThere is good transparency here, as we can both see and hear how the activities are conducted. They also provide daily reviews.\n\nOverall, I would highly recommend this place for the development of children."
}

const otherReviews = [
  { name: 'Priya R.', date: '3 months ago', text: "My son had almost no words at 3 years old. After 6 months with Vasanthi ma'am, he's speaking full sentences and thriving. We are so grateful!" },
  { name: 'Karthik S.', date: '5 months ago', text: "The occupational therapy completely changed our daughter's ability to handle her sensory sensitivities. She now loves school and has made many friends." },
  { name: 'Anitha M.', date: '6 months ago', text: "Vasanthi ma'am treats every child as her own. The progress reports are detailed and the home activities really helped us." },
  { name: 'Suresh K.', date: '8 months ago', text: "The environment is so calming and child-friendly. Our daughter now looks forward to her sessions every week!" },
]

function GoogleStars() {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill="#DC2626" color="#DC2626" />
      ))}
    </div>
  )
}

function ReviewCard({ r, isFeatured }) {
  return (
    <a href="https://www.google.com/search?sca_esv=a0464d9551b247bc&sxsrf=ANbL-n5gA4NzbE2N28CeIspKmjVKogBLnw:1775585636180&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZVu9Ct4kRJlaIvMI6DGekn5VgpCPl7P4IaINThxuMTdEeoMpqvB2n0PGUdemqMS4XAJTsqfzwj6jcltQPzemGslbxPlr2kmw4vBt1XcYri03HdQjY2HP1eKY9Dprtm2-4fdID4%3D&q=SV+Little+Leapsters+therapy+centre+Reviews&sa=X&ved=2ahUKEwiQrvL4q9yTAxVfZWwGHcl6BqEQ0bkNegQIQxAH&biw=1528&bih=732&dpr=1.25" target="_blank" rel="noopener noreferrer" style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '24px',
      padding: isFeatured ? '40px' : '28px',
      border: '1px solid #FFD6D6',
      boxShadow: isFeatured ? '0 20px 40px rgba(220, 38, 38, 0.1)' : '0 10px 20px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#DC2626' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#FFD6D6' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#DC2626',
          color: '#FFF9F0', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'bold', fontSize: '18px', marginRight: '16px'
        }}>
          {r.name.charAt(0)}
        </div>
        <div>
          <h4 style={{ fontWeight: '700', fontSize: '16px', color: '#111827', margin: 0 }}>{r.name}</h4>
          <span style={{ fontSize: '13px', color: '#6B7280' }}>{r.date}</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.81 15.69 17.61V20.35H19.26C21.34 18.43 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.26 20.35L15.69 17.61C14.7 18.27 13.46 18.66 12 18.66C9.17 18.66 6.78 16.74 5.86 14.18H2.18V17.03C4.01 20.65 7.74 23 12 23Z" fill="#34A853"/>
              <path d="M5.86 14.18C5.63 13.49 5.5 12.76 5.5 12C5.5 11.24 5.63 10.51 5.86 9.82V6.97H2.18C1.43 8.47 1 10.18 1 12C1 13.82 1.43 15.53 2.18 17.03L5.86 14.18Z" fill="#FBBC05"/>
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.22 6.99L19.34 3.87C17.46 2.11 14.97 1 12 1C7.74 1 4.01 3.35 2.18 6.97L5.86 9.82C6.78 7.26 9.17 5.34 12 5.34Z" fill="#EA4335"/>
            </svg>
        </div>
      </div>
      <GoogleStars />
      <div style={{
        fontSize: '15px', color: '#4B5563', lineHeight: 1.7, whiteSpace: 'pre-wrap', flex: 1, marginTop: '8px'
      }}>
        {r.text}
      </div>
    </a>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="reviews" style={{
      padding: '140px 24px',
      backgroundColor: '#FFF9F0', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', left: '2%', width: '150px' }} opacity={0.12} color="#FFD6D6" rotate={10} />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '10%', right: '5%', width: '180px' }} opacity={0.08} color="#DC2626" rotate={-10} />
      <AestheticSVG type="ROCKET" style={{ top: '30%', right: '2%', width: '100px' }} opacity={0.08} color="#FFD6D6" rotate={-15} />
      <AestheticSVG type="KIDS_HEART" style={{ bottom: '20%', left: '3%', width: '150px' }} opacity={0.12} color="#DC2626" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FFD6D6', color: '#991B1B',
            padding: '6px 20px', borderRadius: '100px',
            fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '24px'
          }}><Sparkles size={14} fill="#991B1B" color="transparent" /> SHARED SUCCESS</span>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: '#111827', marginBottom: '16px', textTransform: 'uppercase'
          }}>
            REAL <span style={{ color: '#DC2626' }}>RESULTS</span>
          </h2>
          <p style={{ color: '#4B5563', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The reviews that drive us to do more every day for your child's developmental journey.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="reviews-grid">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <ReviewCard r={personalFav} isFeatured={true} />
          </motion.div>

          {/* Right Side Other Reviews - Vertical Marquee */}
          <div style={{
            height: '700px', // Restrict height to cause the mask
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(to bottom, #FFF9F0 0%, transparent 10%, transparent 90%, #FFF9F0 100%)',
            zIndex: 1
          }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to bottom, #FFF9F0 0%, transparent 15%, transparent 85%, #FFF9F0 100%)' }} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
              className="vertical-marquee"
            >
              {[...otherReviews, ...otherReviews, ...otherReviews].map((r, i) => (
                 <div key={i}><ReviewCard r={r} isFeatured={false} /></div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <style>{`
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        
        .vertical-marquee {
          animation: slideUp 25s linear infinite;
        }

        .vertical-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-33.33%); 
          }
        }
      `}</style>
    </section>
  )
}
