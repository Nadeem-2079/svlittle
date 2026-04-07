import React from 'react'
import { motion } from 'framer-motion'

const SVG_TYPES = {
  ARCH: (
    <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 0 C44.77 0 0 44.77 0 100 V300 H200 V100 C200 44.77 155.23 0 100 0Z" fill="currentColor" />
    </svg>
  ),
  BLOB: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.3 43.1 C175.8 61.5 194.2 92.5 186.4 119.5 C178.6 146.5 144.5 169.5 109.8 178.7 C75.1 187.9 39.8 183.3 19.3 162.2 C-1.2 141.1 -6.9 103.5 11.2 72.8 C29.3 42.1 71.1 18.3 105.7 13.1 C140.3 7.9 124.8 24.7 150.3 43.1 Z" fill="currentColor" />
    </svg>
  ),
  STAR: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0 C12 6.627 6.627 12 0 12 C6.627 12 12 17.373 12 24 C12 17.373 17.373 12 24 12 C17.373 12 12 6.627 12 0Z" fill="currentColor" />
    </svg>
  ),
  TEDDY: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="65" r="30" fill="currentColor" opacity="0.6" />
      <circle cx="140" cy="65" r="30" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="110" r="70" fill="currentColor" />
      <circle cx="75" cy="110" r="12" fill="#FFF9F0" opacity="0.3" />
      <circle cx="125" cy="110" r="12" fill="#FFF9F0" opacity="0.3" />
      <path d="M100 130 C90 130 80 140 80 150 Q 100 160 120 150 C 120 140 110 130 100 130Z" fill="#FFF9F0" opacity="0.2" />
    </svg>
  ),
  TOY_BLOCKS: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="80" width="80" height="80" rx="12" fill="currentColor" />
      <rect x="80" y="40" width="80" height="80" rx="12" fill="currentColor" opacity="0.6" />
      <rect x="100" y="100" width="60" height="60" rx="8" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  KIDS_HEART: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 180 L85 165 C35 120 0 90 0 55 C0 25 25 0 55 0 C72 0 88 8 100 20 C112 8 128 0 145 0 C175 0 200 25 200 55 C200 90 165 120 115 165 L100 180Z" fill="currentColor" />
    </svg>
  ),
  ROCKET: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20 L130 140 L70 140 Z" fill="currentColor" />
      <circle cx="100" cy="80" r="15" fill="#FFF9F0" opacity="0.3" />
      <path d="M70 140 L50 165 H150 L130 140 Z" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  ECHO_CIRCLE: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="4" />
      <circle cx="100" cy="100" r="20" fill="currentColor" />
    </svg>
  )
}

const AestheticSVG = ({ type, style, color = '#FFD6D6', opacity = 0.5, rotate = 0, scale = 1, animate = true }) => {
  const content = SVG_TYPES[type] || SVG_TYPES.BLOB

  return (
    <motion.div
      initial={{ opacity: 0, scale: scale * 0.8 }}
      whileInView={{ opacity: opacity, scale: scale }}
      viewport={{ once: true }}
      animate={animate ? {
        y: [0, -15, 0],
        rotate: [rotate, rotate + 5, rotate],
      } : {}}
      transition={animate ? {
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 1.2 }
      } : { duration: 1.2 }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        color: color,
        transform: `rotate(${rotate}deg)`,
        ...style
      }}
    >
      {content}
    </motion.div>
  )
}

export default AestheticSVG
