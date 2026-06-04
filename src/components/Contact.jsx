import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Youtube, Send } from 'lucide-react'

const socials = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/tejas01g',
    color: '#f1f5f9',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tejasvigarg/',
    color: '#0ea5e9',
  },
  {
    icon: <Youtube size={20} />,
    label: 'YouTube',
    href: 'https://www.youtube.com/@tejasviyt',
    color: '#f87171',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    label: 'LeetCode',
    href: 'https://leetcode.com/u/gargtejasvi076/',
    color: '#fbbf24',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 300,
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.06), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 680, width: '100%' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', color: '#22d3ee', letterSpacing: 6, marginBottom: 12 }}>
            GET IN TOUCH
          </p>
          <h2 style={{
            fontFamily: 'Orbitron',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            lineHeight: 1.2,
          }}>
            Let's Build Something{' '}
            <span className="shimmer-text">Together</span>
          </h2>
          <div className="section-line" style={{ width: 120, margin: '1rem auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Contact glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(12px)' }}
          animate={inView ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            className="gradient-border contact-card-glow"
            style={{
              borderRadius: 24,
              padding: '3rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top glow */}
            <div style={{
              position: 'absolute',
              top: -80,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 300,
              height: 200,
              background: 'radial-gradient(ellipse, rgba(14,165,233,0.12), transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Email icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(34,211,238,0.15))',
                border: '1px solid rgba(34,211,238,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 0 30px rgba(14,165,233,0.2)',
              }}
            >
              <Mail size={28} color="#22d3ee" />
            </motion.div>

            <p style={{
              fontFamily: 'Sora',
              fontSize: '1rem',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: 440,
              margin: '0 auto 2rem',
            }}>
              Open to freelance projects, full-time roles, and collaboration. Drop a message and let's create something awesome.
            </p>

            {/* Email link */}
            <a
              href="mailto:gargtejasvi076@gmail.com"
              style={{
                display: 'inline-block',
                fontFamily: 'Orbitron',
                fontSize: '0.95rem',
                color: '#22d3ee',
                textDecoration: 'none',
                letterSpacing: 1,
                marginBottom: '2rem',
                textShadow: '0 0 10px rgba(34,211,238,0.5)',
                transition: 'all 0.3s',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(34,211,238,0.3)',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.textShadow = '0 0 20px rgba(34,211,238,0.8)'}
              onMouseOut={e => e.currentTarget.style.textShadow = '0 0 10px rgba(34,211,238,0.5)'}
            >
              gargtejasvi076@gmail.com
            </a>

            {/* Divider */}
            <div className="section-line" style={{ width: 200, margin: '0 auto 2rem', borderRadius: 2 }} />

            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {socials.map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  title={label}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'rgba(14,165,233,0.08)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 10,
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(14,165,233,0.18)'
                    e.currentTarget.style.borderColor = color
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}40`
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'rgba(14,165,233,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* Send Email CTA */}
            <motion.a
              href="mailto:gargtejasvi076@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
                color: '#0a0a1a',
                fontFamily: 'Orbitron',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: 2,
                padding: '14px 36px',
                borderRadius: 10,
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(14,165,233,0.35), 0 0 60px rgba(34,211,238,0.15)',
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <span style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                backgroundSize: '200% auto',
                animation: 'shimmer 2s linear infinite',
                pointerEvents: 'none',
              }} />
              <Send size={16} />
              SEND EMAIL
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center',
            fontFamily: 'Sora',
            fontSize: '0.75rem',
            color: '#475569',
            marginTop: '2.5rem',
            letterSpacing: 1,
          }}
        >
          Built with ⚡ by Tejasvi Garg © 2025
        </motion.p>
      </div>
    </section>
  )
}