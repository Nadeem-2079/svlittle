import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Phone, Mail, Briefcase, GraduationCap, MapPin, Upload, Send, ArrowLeft, CheckCircle } from 'lucide-react'
import AestheticSVG from '../components/AestheticSVG.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function ApplyPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const roleParam = params.get('role')
    if (roleParam) {
      setRole(roleParam)
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ 
            backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '64px 40px', 
            textAlign: 'center', maxWidth: '500px', width: '100%',
            boxShadow: '0 20px 40px rgba(220, 38, 38, 0.05)',
            border: '1px solid rgba(220, 38, 38, 0.1)'
          }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#DC2626', color: '#FFF9F0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle size={40} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '36px', color: '#111827', marginBottom: '16px' }}>Application Received!</h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.6, marginBottom: '32px' }}>
            Thank you for your interest in joining SV Little Leapsters. Our team will review your profile and contact you soon for a clinical discussion.
          </p>
          <button 
            onClick={() => navigate('/careers')}
            style={{
              backgroundColor: '#111827', color: '#FFF9F0', border: 'none',
              padding: '16px 32px', borderRadius: '100px', fontSize: '15px', fontWeight: '600',
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            Back to Careers
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="apply-container" style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorations */}
      <AestheticSVG type="TEDDY" style={{ top: '5%', right: '2%', width: '150px' }} opacity={0.1} color="#FFD6D6" rotate={15} />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '10%', left: '3%', width: '150px' }} opacity={0.1} color="#DC2626" />
      <AestheticSVG type="STAR" style={{ top: '40%', left: '5%', width: '60px' }} opacity={0.15} color="#DC2626" />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <motion.button 
          onClick={() => navigate('/careers')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            backgroundColor: 'transparent', border: 'none', color: '#6B7280', 
            fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '32px',
            padding: '0'
          }}
        >
          <ArrowLeft size={16} /> Back to Careers
        </motion.button>

        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="apply-header-title" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '12px' }}>
            Join Our <span style={{ fontStyle: 'italic', color: '#DC2626' }}>Exceptional Team</span>
          </h1>
          <p className="apply-header-desc" style={{ fontSize: '16px', color: '#4B5563', marginBottom: '48px', maxWidth: '500px' }}>
            Fill out the form below to apply for the {role || 'position'}. We look forward to meeting you!
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{ 
            backgroundColor: '#FFFFFF', borderRadius: '32px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
            border: '1px solid rgba(220, 38, 38, 0.1)',
            display: 'grid', gap: '24px'
          }}
          className="apply-form"
        >
          {/* Form Fields */}
          <div className="grid-full">
            <label style={labelStyle}>Apply for Position</label>
            <div style={{ position: 'relative' }}>
              <Briefcase style={iconStyle} size={18} />
              <input 
                type="text" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter Position Name" 
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div className="grid-half">
            <label style={labelStyle}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User style={iconStyle} size={18} />
              <input type="text" placeholder="Enter Your Full Name" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-half">
            <label style={labelStyle}>Phone Number</label>
            <div style={{ position: 'relative' }}>
              <Phone style={iconStyle} size={18} />
              <input type="tel" placeholder="Enter Mobile Number" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-full">
            <label style={labelStyle}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={iconStyle} size={18} />
              <input type="email" placeholder="Enter Your Email Address" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-half">
            <label style={labelStyle}>Qualification</label>
            <div style={{ position: 'relative' }}>
              <GraduationCap style={iconStyle} size={18} />
              <input type="text" placeholder="Enter Your Qualification" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-half">
            <label style={labelStyle}>Total Experience</label>
            <div style={{ position: 'relative' }}>
              <Briefcase style={iconStyle} size={18} />
              <input type="text" placeholder="Years of Experience" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-full">
            <label style={labelStyle}>City / Current Address</label>
            <div style={{ position: 'relative' }}>
              <MapPin style={iconStyle} size={18} />
              <input type="text" placeholder="Enter Your City/Location" required style={inputStyle} />
            </div>
          </div>

          <div className="grid-full">
            <label style={labelStyle}>Attach Resume (PDF/DOC)</label>
            <div style={{ 
              border: '2px dashed #E5E7EB', borderRadius: '16px', padding: '32px',
              textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
              position: 'relative'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#DC2626'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
            >
              <Upload size={24} color="#DC2626" />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>Click to upload or drag and drop</span>
              <input type="file" required style={{ opacity: 0, position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: 'pointer' }} />
            </div>
          </div>

          <div className="grid-full">
            <button type="submit" style={{
              width: '100%', backgroundColor: '#DC2626', color: '#FFF9F0',
              padding: '18px', borderRadius: '100px', fontSize: '16px', fontWeight: '700',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              boxShadow: '0 10px 25px rgba(220, 38, 38, 0.2)', transition: 'all 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#991B1B'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#DC2626'}
            >
              Submit Application <Send size={18} />
            </button>
          </div>
        </motion.form>

      </div>

      <style>{`
        .apply-form {
          grid-template-columns: repeat(2, 1fr);
          padding: 48px 40px;
        }
        .grid-full { grid-column: span 2; }
        .grid-half { grid-column: span 1; }

        @media (max-width: 768px) {
          .apply-container { padding: 120px 20px 60px !important; }
          .apply-header-title { font-size: 2.5rem !important; }
        }

        @media (max-width: 640px) {
          .apply-container { padding: 100px 16px 60px !important; }
          .apply-form { 
            grid-template-columns: 1fr !important; 
            padding: 24px 20px !important; 
            gap: 16px !important; 
          }
          .grid-full, .grid-half { grid-column: span 1 !important; }
          .apply-header-title { font-size: 2.2rem !important; }
          .apply-header-desc { font-size: 14px !important; margin-bottom: 32px !important; }
        }
      `}</style>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: '700',
  color: '#9CA3AF',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '8px',
  marginLeft: '4px'
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px 14px 48px',
  backgroundColor: '#F9FAFB',
  border: '1px solid #E5E7EB',
  borderRadius: '12px',
  fontSize: '15px',
  color: '#111827',
  outline: 'none',
  transition: 'all 0.3s'
}

const iconStyle = {
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#DC2626',
  zIndex: 1
}
