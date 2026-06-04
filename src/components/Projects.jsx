import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt'
import { ExternalLink } from 'lucide-react'

function TiltCard({ children, style, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches
    if (!ref.current || isTouchDevice()) return

    VanillaTilt.init(ref.current, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
      scale: 1.02,
    })

    return () => {
      if (ref.current?.vanillaTilt) ref.current.vanillaTilt.destroy()
    }
  }, [])

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

const projects = [
  {
    id: 'devsocial',
    name: 'DevSocial',
    featured: true,
    live: true,
    badge: '🟢 Live on Google Play',
    description: 'A developer-focused social media platform built with React Native. Features include an AI chatbot (DevBot) powered by Groq API, AI content moderation feed, Google Sign-In with Firebase Auth, multi-image post galleries, project showcase cards with terminal-style UI, Dev.to feed integration, real-time Firestore notifications, followers/following system, trending hashtags, and a full dark glassmorphism design.',
    tags: ['React Native', 'Firebase', 'Groq AI', 'Firestore', 'Google Auth'],
    cta: 'View on Play Store',
    link: 'https://play.google.com/store/apps/details?id=com.socialproject.devsocial',
    icon: '⚡',
    color: '#22c55e',
  },
  {
    id: 'expense',
    name: 'AI Expense Tracker',
    description: 'An intelligent personal finance app powered by RAG (Retrieval-Augmented Generation). AI analyzes your online & offline spending patterns, categorizes transactions automatically, and surfaces smart insights through conversational queries — all with interactive charts.',
    tags: ['React Native', 'RAG', 'Groq AI', 'AsyncStorage', 'Recharts'],
    icon: '💸',
    color: '#0ea5e9',
  },
  {
    id: 'portaldrop',
    name: 'PortalDrop',
    inDev: true,
    description: 'An AR-based location-pinned social media app. Drop portals in the real world that others can discover and enter.',
    tags: ['React Native', 'ViroReact', 'AR', 'Firebase'],
    icon: '🌀',
    color: '#a78bfa',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'This very portfolio — built with a 3D futuristic glassmorphism design, smooth scroll animations, and a cinematic developer aesthetic.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    icon: '🔮',
    color: '#22d3ee',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <p style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', color: '#22d3ee', letterSpacing: 6, marginBottom: 12 }}>
          WHAT I'VE BUILT
        </p>
        <h2 style={{
          fontFamily: 'Orbitron',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: 800,
          color: '#f1f5f9',
        }}>
          <span className="shimmer-text">Projects</span>
        </h2>
        <div className="section-line" style={{ width: 120, margin: '1rem auto 0', borderRadius: 2 }} />
      </motion.div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {/* Featured card - spans 2 cols on large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateX: 20, filter: 'blur(12px)' }}
          animate={inView ? { opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ gridColumn: 'span 2', minWidth: 0 }}
          className="lg-span-2"
        >
          <TiltCard style={{ height: '100%' }}>
            <div
              className="gradient-border"
              style={{
                borderRadius: 20,
                padding: '2rem',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderColor: 'rgba(34,197,94,0.3)',
              }}
            >
              {/* Featured glow */}
              <div style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,197,94,0.1), transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Live indicator */}
              <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="live-dot" />
                <span style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#86efac', letterSpacing: 2 }}>LIVE</span>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {/* Icon */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(34,197,94,0.15)',
                }}>
                  {featured.icon}
                </div>

                <div style={{ flex: 1, minWidth: 200 }}>
                  {/* Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.35)',
                    borderRadius: 999,
                    padding: '3px 12px',
                    marginBottom: 10,
                  }}>
                    <span style={{ fontFamily: 'Sora', fontSize: '0.72rem', color: '#86efac' }}>{featured.badge}</span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Orbitron',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#f1f5f9',
                    marginBottom: 8,
                  }}>{featured.name}</h3>

                  <p style={{
                    fontFamily: 'Sora',
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                    maxWidth: 600,
                  }}>
                    {featured.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
                    {featured.tags.map(t => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.1))',
                      border: '1px solid rgba(34,197,94,0.4)',
                      color: '#86efac',
                      fontFamily: 'Orbitron',
                      fontSize: '0.72rem',
                      letterSpacing: 2,
                      padding: '10px 20px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {featured.cta}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Rest of cards */}
        {rest.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 0.85, rotateX: 20, y: 40, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
          >
            <TiltCard style={{ height: '100%' }}>
              <div
                className="gradient-border glass-card-hover"
                style={{
                  borderRadius: 20,
                  padding: '1.75rem',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Ambient glow */}
                <div style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${proj.color}18, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* IN DEVELOPMENT badge */}
                {proj.inDev && (
                  <div className="dev-badge" style={{
                    display: 'inline-block',
                    borderRadius: 999,
                    padding: '3px 12px',
                    marginBottom: 12,
                    width: 'fit-content',
                  }}>
                    <span style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#22d3ee', letterSpacing: 2 }}>
                      ⚙ IN DEVELOPMENT
                    </span>
                  </div>
                )}

                {/* Icon + name row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${proj.color}15`,
                    border: `1px solid ${proj.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: `0 0 14px ${proj.color}25`,
                  }}>
                    {proj.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Orbitron',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#f1f5f9',
                  }}>{proj.name}</h3>
                </div>

                <p style={{
                  fontFamily: 'Sora',
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: '1rem',
                }}>
                  {proj.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {proj.tags.map(t => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
