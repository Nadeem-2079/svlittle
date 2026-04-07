import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Users, Briefcase, ChevronRight, Heart } from 'lucide-react'
import AestheticSVG from '../components/AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px 80px', position: 'relative', overflow: 'hidden' }}>

      {/* Rich Pediatric Aesthetic Layering */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', right: '2%', width: '150px' }} opacity={0.12} color="#FFD6D6" rotate={15} />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '20%', left: '3%', width: '150px' }} opacity={0.12} color="#DC2626" />
      <AestheticSVG type="KIDS_HEART" style={{ top: '30%', left: '-2%', width: '120px' }} opacity={0.1} color="#DC2626" rotate={-10} />
      <AestheticSVG type="ROCKET" style={{ bottom: '10%', right: '5%', width: '100px' }} opacity={0.12} color="#FFD6D6" rotate={20} />
      <AestheticSVG type="TEDDY" style={{ top: '60%', right: '-5%', width: '200px' }} opacity={0.08} color="#DC2626" />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#DC2626', color: '#FFF9F0',
            fontSize: '11px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px',
            marginBottom: '24px', letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>
            <Heart size={14} fill="#FFF9F0" /> CAREERS & OPPORTUNITY
          </span>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
            color: '#111827', marginBottom: '24px', lineHeight: 1
          }}>
            Building A <span style={{ fontStyle: 'italic', color: '#DC2626' }}>Legacy of Care</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#4B5563', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, fontWeight: '400' }}>
            Join a team dedicated to making communication and developmental growth accessible for every child. We provide an environment that values professional excellence.
          </p>
        </motion.div>

        {/* Roles Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '48px', 
            border: '1px solid rgba(220, 38, 38, 0.15)', marginBottom: '40px',
            boxShadow: '0 20px 40px rgba(220, 38, 38, 0.05)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Internal card decoration */}
          <AestheticSVG type="STAR" style={{ top: '20px', right: '20px', width: '40px' }} opacity={0.2} color="#DC2626" />

          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '36px', color: '#111827', marginBottom: '12px' }}>Role Openings</h3>
            <div style={{ display: 'inline-block', backgroundColor: '#FFD6D6', color: '#991B1B', padding: '8px 24px', borderRadius: '100px', fontSize: '13px', fontWeight: '700' }}>
              Qualified Professionals Welcome
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '16px' }}>Candidates will be contacted for an initial clinical discussion.</p>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { title: 'Speech-Language Pathologist', icon: <Users size={20} /> },
              { title: 'Occupational Therapist', icon: <Briefcase size={20} /> },
              { title: 'Front Desk Administrator', icon: <Phone size={20} /> }
            ].map((role) => (
              <motion.div 
                key={role.title} 
                whileHover={{ x: 10, borderColor: '#DC2626' }}
                style={{
                  backgroundColor: '#FFF9F0', borderRadius: '16px', padding: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  border: '1px solid #EADDCF', cursor: 'default', transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#DC2626', color: '#FFF9F0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(220, 38, 38, 0.2)' }}>
                    {role.icon}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#111827' }}>
                    {role.title}
                  </div>
                </div>
                <ChevronRight color="#DC2626" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Submission Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            backgroundColor: '#111827', color: '#FFF9F0', borderRadius: '24px', padding: '48px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Internal decoration */}
          <AestheticSVG type="TEDDY" style={{ top: '-40px', right: '-40px', width: '200px' }} opacity={0.05} color="#FFFFFF" />

          <h4 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', marginBottom: '8px' }}>Join the Family</h4>
          <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '32px', maxWidth: '400px' }}>
            Send your updated CV to our administrator to discuss current session availability.
          </p>
          <div style={{ fontSize: '13px', color: '#FFD6D6', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>
            Admin: M Subash Chellam, MBA
          </div>

          <a href="tel:+918110024552" style={{
            backgroundColor: '#DC2626', color: '#FFF9F0', display: 'flex', alignItems: 'center', gap: '12px',
            padding: '18px 48px', borderRadius: '100px', fontSize: '18px', fontWeight: '800', textDecoration: 'none',
            letterSpacing: '0.02em', boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)', transition: 'all 0.3s'
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#991B1B'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#DC2626'}
          >
            <Phone size={20} fill="#FFF9F0" /> +91 81100 24552
          </a>
        </motion.div>

      </div>
    </div>
  )
}
