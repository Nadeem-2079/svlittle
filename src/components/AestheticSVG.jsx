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
  ORGANIC_LOOP: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 0 C155.23 0 200 44.77 200 100 C200 155.23 155.23 200 100 200 C44.77 200 0 155.23 0 100 C0 44.77 44.77 0 100 0ZM100 40 C66.86 40 40 66.86 40 100 C40 133.14 66.86 160 100 160 C133.14 160 160 133.14 160 100 C160 66.86 133.14 40 100 40Z" fill="currentColor" />
    </svg>
  )
}

const AestheticSVG = ({ type, style, color = '#A8B89F', opacity = 0.8, rotate = 0, scale = 1 }) => {
  const content = SVG_TYPES[type] || SVG_TYPES.BLOB

  return (
    <motion.div
      initial={{ opacity: 0, scale: scale * 0.8 }}
      whileInView={{ opacity: opacity, scale: scale }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
