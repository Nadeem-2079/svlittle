import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle, ChevronLeft, ChevronRight, Lock, Unlock, Settings, ArrowLeft } from 'lucide-react'
import AestheticSVG from '../components/AestheticSVG.jsx'

const TIME_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM'
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function BookingPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookings, setBookings] = useState([])
  const [blockedSlots, setBlockedSlots] = useState([])
  const [step, setStep] = useState(1) // 1: Date/Time, 2: Details, 3: Success
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })

  // Load from LocalStorage
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('sv_bookings') || '[]')
    const savedBlocked = JSON.parse(localStorage.getItem('sv_blocked_slots') || '[]')
    setBookings(savedBookings)
    setBlockedSlots(savedBlocked)
  }, [])

  // Sync with LocalStorage
  const syncStorage = (newBookings, newBlocked) => {
    localStorage.setItem('sv_bookings', JSON.stringify(newBookings))
    localStorage.setItem('sv_blocked_slots', JSON.stringify(newBlocked))
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    const newBooking = {
      id: Date.now(),
      date: selectedDate.toDateString(),
      time: selectedTime,
      ...formData
    }
    const updatedBookings = [...bookings, newBooking]
    setBookings(updatedBookings)
    syncStorage(updatedBookings, blockedSlots)
    setStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleBlockSlot = (time) => {
    if (!selectedDate) return
    const dateStr = selectedDate.toDateString()
    const isAlreadyBlocked = blockedSlots.some(s => s.date === dateStr && s.time === time)
    
    let updatedBlocked
    if (isAlreadyBlocked) {
      updatedBlocked = blockedSlots.filter(s => !(s.date === dateStr && s.time === time))
    } else {
      updatedBlocked = [...blockedSlots, { date: dateStr, time }]
    }
    setBlockedSlots(updatedBlocked)
    syncStorage(bookings, updatedBlocked)
  }

  const isSlotAvailable = (time) => {
    if (!selectedDate) return false
    const dateStr = selectedDate.toDateString()
    const isBooked = bookings.some(b => b.date === dateStr && b.time === time)
    const isBlocked = blockedSlots.some(s => s.date === dateStr && s.time === time)
    return !isBooked && !isBlocked
  }

  // Calendar Logic
  const daysInMonth = (month) => new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (month) => new Date(month.getFullYear(), month.getMonth(), 1).getDay()
  
  const generateCalendarDays = () => {
    const days = []
    const totalDays = daysInMonth(currentMonth)
    const startOffset = firstDayOfMonth(currentMonth)
    for (let i = 0; i < startOffset; i++) days.push(null)
    for (let d = 1; d <= totalDays; d++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d))
    }
    return days
  }

  const isToday = (date) => date && date.toDateString() === new Date().toDateString()
  const isPast = (date) => date && date < new Date(new Date().setHours(0,0,0,0))
  const isSunday = (date) => date && date.getDay() === 0

  if (step === 3) {
    return (
      <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '64px 40px', textAlign: 'center', maxWidth: '500px', width: '100%', boxShadow: '0 20px 40px rgba(220, 38, 38, 0.05)', border: '1px solid rgba(220, 38, 38, 0.1)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#DC2626', color: '#FFF9F0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle size={40} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '36px', color: '#111827', marginBottom: '16px' }}>Consultation Booked!</h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.6, marginBottom: '32px' }}>
            Your appointment for <strong>{selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong> at <strong>{selectedTime}</strong> has been confirmed.
          </p>
          <button onClick={() => window.location.href = '/'} style={{ backgroundColor: '#111827', color: '#FFF9F0', border: 'none', padding: '16px 32px', borderRadius: '100px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Back to Home</button>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px 80px', position: 'relative' }}>
      <AestheticSVG type="TEDDY" style={{ top: '5%', right: '2%', width: '150px' }} opacity={0.05} color="#DC2626" />
      <AestheticSVG type="TOY_BLOCKS" style={{ bottom: '10%', left: '3%', width: '120px' }} opacity={0.05} color="#DC2626" />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <header style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#DC2626', color: '#FFF9F0', fontSize: '11px', fontWeight: '800', padding: '6px 16px', borderRadius: '100px', marginBottom: '16px', textTransform: 'uppercase' }}>Expert Guidance</span>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '16px' }}>
            Book Your <span style={{ fontStyle: 'italic', color: '#DC2626' }}>Consultation</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#4B5563', maxWidth: '500px', margin: '0 auto' }}>Select a convenient time for a clinical discussion about your child's developmental journey.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: step === 1 ? '1.2fr 1fr' : '1fr', gap: '32px' }} className="booking-layout">
          
          {/* Calendar Section */}
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827' }}>
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} style={{ padding: '8px', borderRadius: '50%', border: '1px solid #E5E7EB', backgroundColor: 'transparent', cursor: 'pointer' }}><ChevronLeft size={18} /></button>
                      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} style={{ padding: '8px', borderRadius: '50%', border: '1px solid #E5E7EB', backgroundColor: 'transparent', cursor: 'pointer' }}><ChevronRight size={18} /></button>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center' }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} style={{ fontSize: '12px', fontWeight: '700', color: '#9CA3AF', marginBottom: '8px' }}>{d}</div>)}
                    {generateCalendarDays().map((day, idx) => {
                      if (!day) return <div key={`empty-${idx}`} />
                      const disabled = isPast(day) || isSunday(day)
                      const isSelected = selectedDate?.toDateString() === day.toDateString()
                      return (
                        <button
                          key={day.toISOString()}
                          disabled={disabled}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                          style={{
                            padding: '12px 0', borderRadius: '12px', border: 'none',
                            backgroundColor: isSelected ? '#DC2626' : (isToday(day) ? 'rgba(220, 38, 38, 0.05)' : 'transparent'),
                            color: isSelected ? '#FFF9F0' : (disabled ? '#E5E7EB' : (isToday(day) ? '#DC2626' : '#111827')),
                            fontWeight: (isSelected || isToday(day)) ? '800' : '500',
                            fontSize: '14px', cursor: disabled ? 'default' : 'pointer',
                            transition: 'all 0.2s', border: isToday(day) && !isSelected ? '1px solid rgba(220, 38, 38, 0.2)' : 'none'
                          }}
                        >
                          {day.getDate()}
                        </button>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Time Slots Section */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '12px' }}>
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : 'Select a Date'}
                  </h3>
                  {selectedDate ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {TIME_SLOTS.map(time => {
                        const available = isSlotAvailable(time)
                        return (
                          <div key={time} style={{ position: 'relative' }}>
                            <button
                              disabled={!available}
                              onClick={() => available && setSelectedTime(time)}
                              style={{
                                width: '100%', padding: '16px', borderRadius: '16px', textAlign: 'left',
                                border: selectedTime === time ? '2px solid #DC2626' : '1px solid #E5E7EB',
                                backgroundColor: selectedTime === time ? 'rgba(220, 38, 38, 0.02)' : (available ? '#FFFFFF' : '#F9FAFB'),
                                color: available ? '#111827' : '#9CA3AF',
                                cursor: available ? 'pointer' : 'not-allowed',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                transition: 'all 0.2s'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Clock size={16} color={selectedTime === time ? '#DC2626' : '#9CA3AF'} />
                                <span style={{ fontWeight: selectedTime === time ? '700' : '500' }}>{time}</span>
                              </div>
                              {!available && <span style={{ fontSize: '11px', fontWeight: '700', color: '#DC2626', textTransform: 'uppercase' }}>Unavailable</span>}
                            </button>
                          </div>
                        )
                      })}

                      {selectedTime && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => setStep(2)}
                          style={{ marginTop: '12px', width: '100%', backgroundColor: '#DC2626', color: '#FFF9F0', padding: '16px', borderRadius: '100px', border: 'none', fontWeight: '800', cursor: 'pointer' }}
                        >
                          Confirm Time & Next
                        </motion.button>
                      )}
                    </div>
                  ) : (
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', textAlign: 'center' }}>
                      <p>Please select a date from the calendar to view available slots.</p>
                    </div>
                  )}
                </motion.div>
              </>
            ) : (
              /* Step 2: Details Form */
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '600px', margin: '0 auto', width: '100%', backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '48px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(220, 38, 38, 0.1)' }}>
                <button onClick={() => setStep(1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', backgroundColor: 'transparent', color: '#6B7280', fontSize: '14px', fontWeight: '600', marginBottom: '24px', cursor: 'pointer' }}><ArrowLeft size={16} /> Back to Selection</button>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '8px' }}>Who is joining?</h2>
                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>Review: {selectedDate?.toLocaleDateString()} at {selectedTime}</p>
                
                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User style={iconStyle} size={18} />
                      <input type="text" placeholder="Enter Name" required style={inputStyle} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <Phone style={iconStyle} size={18} />
                      <input type="tel" placeholder="Enter Mobile Number" required style={inputStyle} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <Mail style={iconStyle} size={18} />
                      <input type="email" placeholder="Enter Email" required style={inputStyle} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#DC2626', color: '#FFF9F0', padding: '18px', borderRadius: '100px', fontSize: '16px', fontWeight: '800', border: 'none', cursor: 'pointer', marginTop: '12px', boxShadow: '0 10px 25px rgba(220, 38, 38, 0.2)' }}>Complete Booking</button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }
const inputStyle = { width: '100%', padding: '14px 16px 14px 48px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '15px', color: '#111827', outline: 'none' }
const iconStyle = { position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#DC2626', zIndex: 1 }
