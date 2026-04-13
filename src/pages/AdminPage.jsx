import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon, Clock, User, Phone, Mail, 
  ChevronLeft, ChevronRight, Lock, Unlock, Trash2, 
  Search, Filter, LayoutDashboard, Calendar as CalendarDays 
} from 'lucide-react'
import AestheticSVG from '../components/AestheticSVG.jsx'

const TIME_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM'
]

export default function AdminPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [bookings, setBookings] = useState([])
  const [blockedSlots, setBlockedSlots] = useState([])
  const [view, setView] = useState('bookings') // 'bookings' or 'availability'
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteModalId, setDeleteModalId] = useState(null)
  
  // Security State
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)

  const handlePinSubmit = (e) => {
    e.preventDefault()
    if (pin === '1234') { // Default PIN: 1234
      setIsAuthorized(true)
      setError(false)
    } else {
      setError(true)
      setPin('')
    }
  }

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

  const handleDeleteConfirm = () => {
    if (deleteModalId) {
      const updatedBookings = bookings.filter(b => b.id !== deleteModalId)
      setBookings(updatedBookings)
      syncStorage(updatedBookings, blockedSlots)
      setDeleteModalId(null)
    }
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

  const isSlotBooked = (time) => {
    if (!selectedDate) return false
    return bookings.some(b => b.date === selectedDate.toDateString() && b.time === time)
  }

  const isSlotBlocked = (time) => {
    if (!selectedDate) return false
    return blockedSlots.some(s => s.date === selectedDate.toDateString() && s.time === time)
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

  const filteredBookings = bookings
    .filter(b => 
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm)
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  if (!isAuthorized) {
    return (
      <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '48px', maxWidth: '400px', width: '100%', boxShadow: '0 20px 40px rgba(220, 38, 38, 0.05)', border: '1px solid rgba(220, 38, 38, 0.1)', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Lock size={32} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', color: '#111827', marginBottom: '8px' }}>Admin Access</h2>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>Please enter your security PIN to continue.</p>
          
          <form onSubmit={handlePinSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                placeholder="Enter PIN" 
                maxLength={4}
                style={{ width: '100%', padding: '16px', borderRadius: '16px', border: error ? '2px solid #DC2626' : '1px solid #E5E7EB', textAlign: 'center', fontSize: '24px', letterSpacing: '0.4em', fontWeight: '800', outline: 'none' }}
                value={pin}
                onChange={(e) => { setPin(e.target.value); setError(false); }}
                autoFocus
              />
              {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#DC2626', fontSize: '12px', fontWeight: '700', marginTop: '8px' }}>Incorrect PIN. Please try again.</motion.p>}
            </div>
            <button type="submit" style={{ backgroundColor: '#DC2626', color: '#FFF9F0', padding: '16px', borderRadius: '100px', border: 'none', fontWeight: '800', cursor: 'pointer', marginTop: '8px', boxShadow: '0 8px 16px rgba(220, 38, 38, 0.2)' }}>Unlock Dashboard</button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FFF9F0', minHeight: '100vh', padding: '140px 24px 80px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '48px', color: '#111827', margin: 0 }}>Admin Dashboard</h1>
              <button onClick={() => setIsAuthorized(false)} style={{ backgroundColor: 'rgba(17, 24, 39, 0.05)', border: 'none', padding: '6px 14px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#6B7280', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}><Unlock size={12} /> Sign Out</button>
            </div>
            <p style={{ color: '#6B7280', fontSize: '16px' }}>Manage your clinic bookings and schedule availability.</p>
          </div>
          
          <div style={{ display: 'flex', backgroundColor: '#FFFFFF', padding: '6px', borderRadius: '100px', border: '1px solid #EADDCF', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <button 
              onClick={() => setView('bookings')}
              style={{ padding: '10px 24px', borderRadius: '100px', border: 'none', backgroundColor: view === 'bookings' ? '#DC2626' : 'transparent', color: view === 'bookings' ? '#FFF9F0' : '#4B5563', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <LayoutDashboard size={16} /> Bookings
            </button>
            <button 
              onClick={() => setView('availability')}
              style={{ padding: '10px 24px', borderRadius: '100px', border: 'none', backgroundColor: view === 'availability' ? '#DC2626' : 'transparent', color: view === 'availability' ? '#FFF9F0' : '#4B5563', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <CalendarDays size={16} /> Availability
            </button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {view === 'bookings' ? (
            <section>
              {/* Search & Filters */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '24px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                  <input 
                    type="text" 
                    placeholder="Search by name, email or phone..." 
                    style={{ width: '100%', padding: '12px 16px 12px 48px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '14px' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div style={{ color: '#6B7280', fontSize: '14px', fontWeight: '600' }}>
                  Total: {bookings.length}
                </div>
              </div>

              {/* Bookings Table */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                        <th style={thStyle}>Client Details</th>
                        <th style={thStyle}>Appointment</th>
                        <th style={thStyle}>Status</th>
                        <th style={thStyle}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
                        <tr key={booking.id} style={{ borderBottom: '1px solid #F3F4F6', transition: 'background-color 0.2s' }}>
                          <td style={tdStyle}>
                            <div style={{ fontWeight: '700', color: '#111827', fontSize: '15px' }}>{booking.name}</div>
                            <div style={{ fontSize: '12px', color: '#6B7280', display: 'flex', gap: '12px', marginTop: '4px' }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={12} /> {booking.phone}</span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mail size={12} /> {booking.email}</span>
                            </div>
                          </td>
                          <td style={tdStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4B5563', fontWeight: '600' }}>
                              <CalendarIcon size={14} color="#DC2626" /> {new Date(booking.date).toLocaleDateString()}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF', fontSize: '12px', marginTop: '4px' }}>
                              <Clock size={14} /> {booking.time}
                            </div>
                          </td>
                          <td style={tdStyle}>
                            <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#15803d', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>Confirmed</span>
                          </td>
                          <td style={tdStyle}>
                            <button 
                              onClick={() => setDeleteModalId(booking.id)}
                              style={{ backgroundColor: 'transparent', border: 'none', color: '#DC2626', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'background-color 0.2s' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.05)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan="4" style={{ padding: '64px', textAlign: 'center', color: '#9CA3AF' }}>
                            No bookings found. Try a different search term.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ) : (
            /* Availability View */
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px' }} className="admin-availability-layout">
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
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
                    const isSelected = selectedDate?.toDateString() === day.toDateString()
                    const isSunday = day.getDay() === 0
                    return (
                      <button
                        key={day.toISOString()}
                        onClick={() => setSelectedDate(day)}
                        style={{
                          padding: '12px 0', borderRadius: '12px', border: 'none',
                          backgroundColor: isSelected ? '#DC2626' : 'transparent',
                          color: isSelected ? '#FFF9F0' : (isSunday ? '#E5E7EB' : '#111827'),
                          fontWeight: isSelected ? '800' : '500',
                          fontSize: '14px', cursor: 'pointer',
                          transition: 'all 0.2s',
                          opacity: isSunday && !isSelected ? 0.5 : 1
                        }}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(220, 38, 38, 0.05)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', marginBottom: '12px' }}>
                  Manage Slots for {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </h3>
                <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '24px' }}>Click a slot to toggle its availability for clients.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {TIME_SLOTS.map(time => {
                    const booked = isSlotBooked(time)
                    const blocked = isSlotBlocked(time)
                    return (
                      <button
                        key={time}
                        onClick={() => !booked && toggleBlockSlot(time)}
                        style={{
                          width: '100%', padding: '16px', borderRadius: '16px', textAlign: 'left',
                          border: booked ? '1px solid #E5E7EB' : (blocked ? '2px solid #DC2626' : '1px dotted #DC2626'),
                          backgroundColor: booked ? '#F9FAFB' : (blocked ? 'rgba(220, 38, 38, 0.02)' : 'transparent'),
                          color: booked ? '#9CA3AF' : '#111827',
                          cursor: booked ? 'not-allowed' : 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <Clock size={16} color={blocked ? '#DC2626' : '#9CA3AF'} />
                          <span style={{ fontWeight: '600' }}>{time}</span>
                        </div>
                        {booked ? (
                          <span style={{ fontSize: '10px', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase' }}>Booked</span>
                        ) : (
                          blocked ? <Lock size={16} color="#DC2626" /> : <Unlock size={16} color="#4F634B" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {deleteModalId && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDeleteModalId(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.4)', backdropFilter: 'blur(8px)' }} 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '40px', maxWidth: '440px', width: '100%', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid rgba(220, 38, 38, 0.1)', textAlign: 'center' }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Trash2 size={32} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '12px' }}>Cancel Booking?</h3>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.6, marginBottom: '32px' }}>
                Are you sure you want to cancel this appointment? This action will permanently remove the booking and free up the time slot.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button 
                  onClick={() => setDeleteModalId(null)}
                  style={{ padding: '14px', borderRadius: '100px', border: '1px solid #E5E7EB', backgroundColor: 'transparent', color: '#4B5563', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}
                >
                  Keep Booking
                </button>
                <button 
                  onClick={handleDeleteConfirm}
                  style={{ padding: '14px', borderRadius: '100px', border: 'none', backgroundColor: '#DC2626', color: '#FFF9F0', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}
                >
                  Yes, Cancel It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (max-width: 900px) {
          .admin-availability-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const thStyle = { padding: '16px 24px', fontSize: '12px', fontWeight: '800', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }
const tdStyle = { padding: '24px' }
