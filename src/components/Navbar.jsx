import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollY = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollY) {
          setActive(navItems[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(34,211,238,0.15)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => scrollTo('home')}
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 700,
          fontSize: '1.2rem',
          background: 'linear-gradient(90deg, #0ea5e9, #22d3ee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          cursor: 'pointer',
          letterSpacing: 2,
        }}
      >
        TG
      </motion.div>

      {/* Desktop nav */}
      <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center', display: 'flex' }}>
        {navItems.map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollTo(item)}
            whileHover={{ scale: 1.1 }}
            style={{
              background: 'none', border: 'none',
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.85rem',
              fontWeight: active === item ? 600 : 400,
              color: active === item ? '#22d3ee' : '#94a3b8',
              cursor: 'pointer',
              letterSpacing: 1,
              textShadow: active === item ? '0 0 8px rgba(34,211,238,0.6)' : 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '4px 0',
            }}
          >
            {item}
            {active === item && (
              <motion.div
                layoutId="activeBar"
                style={{
                  position: 'absolute', bottom: -2, left: 0, right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #0ea5e9, #22d3ee)',
                  borderRadius: 2,
                  boxShadow: '0 0 6px #22d3ee',
                }}
              />
            )}
          </motion.button>
        ))}

        {/* Resume Button - Desktop */}
        <a
          href="/resume.pdf"
          download="Tejasvi_Garg_Resume.pdf"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(34,211,238,0.1))',
            border: '1px solid rgba(34,211,238,0.4)',
            color: '#22d3ee',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: 1.5,
            padding: '8px 16px',
            borderRadius: 8,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 12px rgba(34,211,238,0.1)',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(14,165,233,0.3), rgba(34,211,238,0.2))'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,0.3), 0 0 40px rgba(14,165,233,0.15)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(34,211,238,0.1))'
            e.currentTarget.style.boxShadow = '0 0 12px rgba(34,211,238,0.1)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <Download size={13} />
          RESUME
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden flex-col gap-1.5 p-2"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: 22, height: 2,
            background: '#22d3ee', borderRadius: 2,
            transition: 'all 0.3s',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                        menuOpen && i === 1 ? 'scaleX(0)' :
                        menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute', top: 68, left: 0, right: 0,
            background: 'rgba(10,10,26,0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(34,211,238,0.2)',
            padding: '1rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}
        >
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: 'none', border: 'none',
                color: active === item ? '#22d3ee' : '#94a3b8',
                fontFamily: 'Sora, sans-serif',
                fontSize: '1rem', textAlign: 'left',
                cursor: 'pointer', padding: '0.5rem 0',
                borderBottom: '1px solid rgba(34,211,238,0.1)',
              }}
            >
              {item}
            </button>
          ))}

          {/* Resume - Mobile */}
          <a
            href="/resume.pdf"
            download="Tejasvi_Garg_Resume.pdf"
            style={{
              display: 'flex', alignItems: 'center',
              gap: 8, justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(34,211,238,0.1))',
              border: '1px solid rgba(34,211,238,0.4)',
              color: '#22d3ee',
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: 1.5,
              padding: '10px 16px', borderRadius: 8,
              textDecoration: 'none', cursor: 'pointer', marginTop: '0.5rem',
            }}
          >
            <Download size={14} />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}