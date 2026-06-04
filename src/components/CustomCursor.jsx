import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const trailPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice()) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      const cursor = cursorRef.current
      const trail = trailRef.current
      if (!cursor || !trail) { raf = requestAnimationFrame(animate); return }

      cursor.style.left = posRef.current.x + 'px'
      cursor.style.top = posRef.current.y + 'px'

      trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.12
      trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.12
      trail.style.left = trailPosRef.current.x + 'px'
      trail.style.top = trailPosRef.current.y + 'px'

      raf = requestAnimationFrame(animate)
    }
    animate()

    // Hover effects
    const addHover = () => {
      cursorRef.current?.classList.add('scale-150')
    }
    const removeHover = () => {
      cursorRef.current?.classList.remove('scale-150')
    }
    const els = document.querySelectorAll('a, button, [data-cursor-hover]')
    els.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 10,
          height: 10,
          background: '#22d3ee',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 40px rgba(34,211,238,0.5)',
          transition: 'transform 0.15s ease',
        }}
      />
      {/* Trail orb */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          width: 36,
          height: 36,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(34,211,238,0.4)',
          background: 'rgba(14,165,233,0.05)',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 0 20px rgba(34,211,238,0.2)',
          transition: 'none',
        }}
      />
    </>
  )
}
